import React from "react";
import './NotFound.scss';

function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__header">Ошибка</div>
      <div className="not-found__message">Страница не существует</div>
    </div>
  );
}

export default NotFound;