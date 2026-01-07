import '../../styles/problem.css'

type Props = {
  fieldType: string
  value?: number
  editable?: boolean
  onChange?: (v: number) => void
};

function InputField({ fieldType, value, editable = true, onChange } : Props) {
    return (
    <div className="field">
      <div className="field-title">
        {fieldType}
      </div>
      
      <input 
        className="field-input" 
        type="number"
        value={value ?? 0}
        disabled={!editable}
        onChange={
          editable && onChange 
            ? e => onChange(Math.min(Math.ceil(Number(e.target.value)), 1440))
            : undefined
        }
      />
    </div>
    )
}

export default InputField
