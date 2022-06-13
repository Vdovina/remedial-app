import React from "react";
import classNames from "classnames";
import './Button.scss';

export enum ButtonTheme {
  default = 'default',
  noBorder = 'noBorder',
  light = 'light',
  ouline = 'outline',
}

type ButtonProps = {
  disabled?: boolean,
  // label: string,
  onClick: () => void,
  type?: 'button' | 'submit' | 'reset',
  theme?: ButtonTheme,
  children?: JSX.Element | string,
}

function Button({
  disabled = false,
  onClick,
  type = 'button',
  theme = ButtonTheme.default,
  children,
} : ButtonProps) {
  return(
    <button
      className={classNames(
        'button',
        theme && `button__${theme}`,
      )}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button;