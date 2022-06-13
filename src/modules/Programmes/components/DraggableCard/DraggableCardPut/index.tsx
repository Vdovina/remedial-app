import classNames from "classnames";
import React, { useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import type { Identifier, XYCoord } from 'dnd-core'
import { DraggableCardProps } from "..";
import RemoveIcon from '../../../../../assets/input-error.svg';
import { DurationInput } from '../../../../../components';

interface DraggableCardPutProps extends DraggableCardProps {
  index: number,
  timing: number,
  onTimingChange: (id: number, timing: number) => void,
  onRemove: (id: number) => void;
  onMove: (dragIndex: number, hoverIndex: number) => void;
}

export interface DragItem {
  index: number
  id: string
  type?: string
}

function DraggableCardPut({
  id,
  index,
  name,
  timing,
  onTimingChange,
  type,
  className,
  onRemove,
  onMove,
} : DraggableCardPutProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [{ isDragging }, drag] = useDrag({
    type: type,
    item: () => {
      return { id, index }
    },
    collect: (monitor: any) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const [{ handlerId }, drop] = useDrop<
    DragItem,
    void,
    { handlerId: Identifier | null }
  >({
    accept: type,
    collect: (monitor) => ({handlerId: monitor.getHandlerId()}),
    hover: (item: DragItem, monitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top;
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      onMove(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });
  const opacity = isDragging ? 0 : 1
  drag(drop(ref))

  return (
    <div
      className={classNames(
        'draggable-card__put__wrapper',
        className && className
      )}
      ref={ref}
      data-handler-id={handlerId}
      style={{ opacity }}
    >
      <div className="draggable-card__put">
        <div className="draggable-card__put__index">{index + 1}.</div>
        <div className="draggable-card__put__name">{name}</div>
        <div className="draggable-card__put__time-input">
          <DurationInput
            value={timing}
            setValue={(newTiming) => onTimingChange(id, newTiming)}
          />
        </div>
      </div>
      <div className="draggable-card__remove" onClick={() => onRemove(index)}>
        <img className="draggable-card__remove__icon" src={RemoveIcon} alt="remove"/>
      </div>
    </div>
  );
}

export default DraggableCardPut;