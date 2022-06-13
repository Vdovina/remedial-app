import React from "react";
import classNames from "classnames";
import ErrorIcon from '../../assets/input-error.svg';
import './Input.scss';

type InputProps = {
  value: string,
  onChange: (value: string) => void,
  placeholder?: string,
  type?: string,
  className?: string,
  isValid?: boolean,
  invalidMessage?: string,
}

function Input({
  value,
  onChange,
  placeholder = 'Введите значение',
  type = 'text',
  className,
  isValid = true,
  invalidMessage,
} : InputProps) {

  return(
    <div className={classNames(
        "text-input__wrapper",
        className && className
      )}>
      <input
        className={classNames(
          "text-input",
          !isValid && "text-input__invalid",
          )}
        value={value}
        onChange={(e) => {
          if (onChange) {
            onChange(e.target.value)
          }
        }}
        placeholder={placeholder}
        type={type}
      />
      {!isValid && <div className="text-input__invalid-msg">{invalidMessage}</div>}
    </div>
  )
}

export default Input;