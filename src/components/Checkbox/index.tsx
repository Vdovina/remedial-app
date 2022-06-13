import React from "react";
import './Checkbox.scss';

type CheckboxProps = {
  disabled?: boolean,
  label: string,
  value?: boolean,
  onChange: (value: boolean) => void,
}

function Checkbox({
  disabled = false,
  label,
  value = false,
  onChange,
} : CheckboxProps) {
  const onCheckboxChange = (event: React.FormEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.currentTarget.checked)
    }
  };

  return(
    <div className="checkbox__wrapper">
      <label className="checkbox__label">
        <input
          className="checkbox"
          disabled={disabled}
          checked={value}
          onChange={onCheckboxChange}
          type='checkbox'
        />
        {label}
      </label>
    </div>
  )
}

export default Checkbox;