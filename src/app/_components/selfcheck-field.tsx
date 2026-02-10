function SelfcheckField() {
    return(
        <div>
            <div className="field-title">
                By yourself?
            </div>
            
            <select className="select">
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