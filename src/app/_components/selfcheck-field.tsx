type SelfcheckProps = {
    value: boolean;
    onChange: (val: boolean) => void;
}

function SelfcheckField({ value, onChange } : SelfcheckProps) {
    return(
        <div>
            <div className="field-title">
                By yourself?
            </div>
            
            <select 
                className="select"
                value={value ? "YES" : "NO"}
                onChange={(e) => onChange(e.target.value === "YES")}
            >
                <option value="NO">
                    NO
                </option>
                <option value="YES">
                    YES
                </option>
            </select>
        </div>
    );
}

export default SelfcheckField;