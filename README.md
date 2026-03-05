# RAM Training

A training platform for competitive programming students at Tecnológico de Monterrey. Built with modern web technologies to provide structured learning paths, problem tracking, and progress monitoring.

## 🚀 Features

- **Structured Learning Paths**: Organized tracks with levels and modules for progressive learning
- **Problem Management**: Comprehensive problem database with difficulty levels and categories
- **Progress Tracking**: Detailed tracking of solves, time spent, and perceived difficulty
- **User Authentication**: Secure authentication with role-based access (User/Admin)
- **Admin Dashboard**: Administrative tools for managing content and users
- **Leaderboard**: Competitive ranking system
- **Resource Management**: Links to learning materials, videos, and references
- **Real-time Updates**: Modern UI with responsive design

## 🛠 Tech Stack

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

- **Frontend**: Next.js 16, React 19, TypeScript
- **Backend**: tRPC for type-safe API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with multiple providers
- **Styling**: CSS Modules with custom design system
- **Development**: ESLint, Prettier

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL database
- Docker (if local database setup)

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd ram-training
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env` file in the root directory with the following variables:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/ram_training"
DIRECT_URL="postgresql://username:password@localhost:5432/ram_training"
AUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 4. Database Setup

#### Option A: Local PostgreSQL
Ensure you have PostgreSQL running locally and update the `DATABASE_URL` accordingly.

#### Option B: Docker Database
Use the provided script to start a PostgreSQL container:

```bash
./start-database.sh
```

### 5. Database Migration

```bash
# Generate Prisma client
npm run db:generate

# Run migrations
npm run db:migrate
```

### 6. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run preview` - Build and preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format:check` - Check code formatting
- `npm run format:write` - Format code with Prettier
- `npm run typecheck` - Run TypeScript type checking
- `npm run check` - Run linting and type checking
- `npm run db:generate` - Generate Prisma client
- `npm run db:migrate` - Run database migrations
- `npm run db:push` - Push schema changes to database
- `npm run db:studio` - Open Prisma Studio

## 🏗 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── _components/        # Reusable UI components
│   ├── admin/             # Admin pages and actions
│   ├── api/               # API routes
│   ├── leaderboard/       # Leaderboard page
│   ├── sign-in/          # Authentication page
│   └── train/            # Main training interface
├── server/                # Server-side code
│   ├── api/              # tRPC routers
│   ├── auth/             # Authentication configuration
│   └── db.ts             # Database connection
├── styles/               # CSS stylesheets
└── trpc/                 # tRPC configuration

prisma/
├── schema.prisma         # Database schema
└── migrations/           # Database migrations
```

## 🔐 Authentication

The platform supports multiple authentication providers through NextAuth.js. For production, configure OAuth providers (Google, GitHub, etc.) in `src/server/auth/config.ts`.

## 👥 User Roles

- **USER**: Standard user with access to training content
- **ADMIN**: Full access including content management and user administration

## 📊 Data Models

### Core Entities
- **Tracks**: Learning paths (e.g., "Beginner", "Intermediate", "Advanced")
- **Levels**: Subdivisions within tracks (e.g., "A", "B", "C1")
- **Modules**: Collections of problems with launch dates
- **Problems**: Individual coding challenges
- **Resources**: Learning materials and references
- **Users**: Platform users with progress tracking
- **Solves**: User submissions and progress data

### Key Features
- Hierarchical organization: Track → Level → Module → Problem
- Progress tracking with time metrics and difficulty ratings
- Resource linking for additional learning materials
- Admin content management interface

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Development Guidelines

- Follow TypeScript strict mode
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Test database changes with migrations
- Use tRPC for all API communications
- Maintain type safety throughout the application

## 📄 License

This project uses the MIT License.

## 🆘 Support

For technical issues or questions:
- Check the [Issues](https://github.com/your-repo/issues) page
- Contact the development team
- Refer to the internal documentation

---

Built with ❤️ for the RAMcpp community at Tecnológico de Monterrey