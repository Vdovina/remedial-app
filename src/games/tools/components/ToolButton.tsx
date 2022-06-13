import React from "react";
import classNames from "classnames";

interface ToolButtonProps {
  children: JSX.Element,
  className?: string,
  onClick: () => void,
}

export function ToolButton({ children, className, onClick } : ToolButtonProps) {
  return (
    <button
      className={classNames(
        "tools-panel__btn",
        className && className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}