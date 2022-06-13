import React from "react";
import './TableMessage.scss';

interface TableMessageProps {
  icon?: string,
  message: string,
}

function TableMessage({
  icon,
  message,
} : TableMessageProps) {
  return (
    <div className="table-message">
      {icon && <i className={`table-message__icon table-message__icon_${icon}`} />}
      <p className="table-message__message">{message}</p>
    </div>
  );
}

export default TableMessage;