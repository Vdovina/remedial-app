import React from "react";
import classNames from "classnames";

interface ToolButtonProps {
  children: JSX.Element,
  className?: string,
  onClick: () => void,
  disabled?: boolean,
}

export function ToolButton({ children, className, onClick, disabled = false } : ToolButtonProps) {
  return (
    <button
      className={classNames(
        "tools-panel__btn",
        className && className,
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}