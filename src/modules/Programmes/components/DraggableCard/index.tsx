import classNames from "classnames";
import React from "react";
import { useDrag } from "react-dnd";
import './DraggableCard.scss';

export interface DraggableCardProps {
  id: number,
  name: string,
  timing: number,
  type: string,
  className?: string,
}

function DraggableCard({ id, name, timing, type, className } : DraggableCardProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: type,
    item: { id, name, timing },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    }),
  });
  return (
    <div
      className={classNames(
        'draggable-card',
        className && className
      )}
      ref={dragRef}
    >
      {name}
    </div>
  );
}

export default DraggableCard;