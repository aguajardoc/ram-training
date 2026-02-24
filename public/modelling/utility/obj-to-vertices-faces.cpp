#include <fstream>
#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <limits>
#include "json.hpp"

using json = nlohmann::json;

struct Vertex {
    float x, y, z;

    Vertex(float _x, float _y, float _z) : x(_x), y(_y), z(_z) {}
};

struct Face {
    std::vector<int> connected_indices;

    Face(std::vector<int> _connected_indices) : connected_indices(_connected_indices) {}
};

bool is_vertex(std::string& file_line) {
    return ((int)file_line.length() >= 2 and file_line[0] == 'v' and file_line[1] == ' ');
}

bool is_face(std::string& file_line) {
    return ((int)file_line.length() >= 2 and file_line[0] == 'f' and file_line[1] == ' ');
}

Vertex parse_vertex(std::string& file_line) {
    // Consists of 3 real numbers: x, y, z
    float values[3] = {0, 0, 0};

    // Appended a space to handle all logic within the for loop
    file_line += ' ';

    // Keep current value and current value index
    std::string current_value;
    int current_index = 0;

    for (int i = 2; i <= (int)file_line.size(); i++) {
        // If it's a space, we have either finished a number or encountered filler
        if (file_line[i] == ' ') {
            // Filters for possible filler
            if (!current_value.empty()) {
                values[current_index++] = stof(current_value);
                current_value.clear();
            }
        }
        else {
            current_value += file_line[i];
        }
    }

    return Vertex(values[0], values[1], values[2]);
}

Face parse_face(std::string& file_line) {
    // Consists of at least 3 integers, as indices
    std::vector<int> indices;
    // They can be separated by / to indicate different attachments
    // In this case, we only care about the first integer

    // Appended a space to handle all logic within the for loop
    file_line += ' ';

    // Keep current value
    std::string current_value;

    for (int i = 2; i <= (int)file_line.size(); i++) {
        // If it's a space, we have either finished a number or encountered filler
        if (file_line[i] == ' ') {
            // Filters for possible filler
            if (!current_value.empty()) {
                // If it has forward slashes, break the number until the first one
                auto it = std::find(current_value.begin(), current_value.end(), '/');

                if (it != current_value.end()) {
                    current_value = current_value.substr(0, it - current_value.begin()); 
                }

                // Add to vector and clear number string
                indices.push_back(stoi(current_value) - 1); // .obj file face indices are 1-indexed; we want 0-indexed
                current_value.clear();
            }
        }
        else {
            current_value += file_line[i];
        }
    }

    return Face(indices);
}

void to_json(json& j, const Vertex& v) {
    j = json{{"x", v.x}, {"y", v.y}, {"z", v.z}};
}

void to_json(json& j, const Face& f) {
    j = f.connected_indices;
}

void normalize(std::vector<Vertex>& vertices, float target_range = 0.4f) {
    if (vertices.empty()) return;

    // Get bounding box limits
    float min_x = std::numeric_limits<float>::max();
    float min_y = min_x, min_z = min_x;
    float max_x = std::numeric_limits<float>::lowest();
    float max_y = max_x, max_z = max_x;

    for (const auto& v : vertices) {
        min_x = std::min(min_x, v.x);
        min_y = std::min(min_y, v.y);
        min_z = std::min(min_z, v.z);
        
        max_x = std::max(max_x, v.x);
        max_y = std::max(max_y, v.y);
        max_z = std::max(max_z, v.z);
    }

    // Calculate exact center
    float center_x = (min_x + max_x) / 2.0f;
    float center_y = (min_y + max_y) / 2.0f;
    float center_z = (min_z + max_z) / 2.0f;

    // Get the largest dimension to maintain aspect ratio
    float max_size = std::max({max_x - min_x, max_y - min_y, max_z - min_z});
    
    // Prevent division by zero if all vertices are at the exact same point
    if (max_size == 0.0f) return; 

    // Scale factor to map the max extent to the target range
    float scale = target_range / (max_size / 2.0f);

    // Center at 0,0,0 and scale
    for (auto& v : vertices) {
        v.x = (v.x - center_x) * scale;
        v.y = (v.y - center_y) * scale;
        v.z = (v.z - center_z) * scale;
    }
}

int main() {
    // Get input file name
    std::string input_file_name;
    std::cout << "Input .obj file name (case-sensitive, without file extension): ";
    std::cin >> input_file_name;
    std::cout << '\n';

    // Get input file path
    std::string input_path = "../raw-models/";
    input_path += input_file_name;
    input_path += ".obj";

    // Validate file existence, while opening the file
    if (std::freopen(input_path.c_str(), "r", stdin)) {
        std::cout << "A file exists! Starting vertex + face extraction...\n"; 
    }
    else {
        std::cerr << "A file with this name and .obj extension was not found in this folder. Exiting...\n";
        return -1;
    }

    // Extract vertices and faces
    std::string file_line;
    std::vector<Vertex> vertices;
    std::vector<Face> faces;

    while (getline(std::cin, file_line)) {
        // Check if vertex
        if (is_vertex(file_line)) {
            vertices.push_back(parse_vertex(file_line));
        }
        // Check if face
        else if (is_face(file_line)) {
            faces.push_back(parse_face(file_line));
        }
        // Else it is ignored
    }

    // Process vertices
    normalize(vertices);

    // Write to JSON
    json model;
    model["vs"] = vertices;
    model["fs"] = faces; 

    std::cout << "Extraction complete!\n";
    std::cout << "\nSaving model to the " << input_file_name << ".json file...\n";

    // Format file path
    std::string output_path = "../models/";
    output_path += input_file_name;
    output_path += ".json";

    // Write to path
    std::ofstream file(output_path);
    file << model.dump(4); // 4 => indentation

    std::cout << "Model saved! Exiting...\n";

    return 0;
}