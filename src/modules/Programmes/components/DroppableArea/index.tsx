import React, { useCallback, useState } from "react";
import classNames from "classnames";
import update from 'immutability-helper'
import { useDrop } from "react-dnd";
import DraggableCard, { DraggableCardProps } from '../DraggableCard';
import DraggableCardPut, { DragItem } from "../DraggableCard/DraggableCardPut";
import './DroppableArea.scss';

interface DroppableAreaProps {
  type: string,
  className?: string,
  basket: any[],
  setBasket: (value: any) => void,
  onTimingChange: (id: number, timing: number) => void,
}

function DroppableArea({
  type,
  className,
  basket,
  setBasket,
  onTimingChange
} : DroppableAreaProps) {
  const [cardId, setcardId] = useState<number>(0);
  const [{ isOver }, dropRef] = useDrop({
    accept: type,
    drop: (item: any) => {
      setBasket(
        (basket: any) => !basket.includes(item) ? [...basket, {
          ...item,
          gameId: item.id,
          id: cardId,
        }] : basket
      );
      setcardId(cardId + 1);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver()
    }),
  });
  
  const onMove = useCallback((dragIndex: number, hoverIndex: number) => {
    setBasket((prevBasket: any) =>
        update(prevBasket, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevBasket[dragIndex]],
          ],
        }),
      )
  }, [basket]);

  const onRemove = useCallback((index: number) => {
    setBasket((prevBasket: any) =>
      update(prevBasket, {
        $splice: [[index, 1]],
      }));
  }, [basket]);

  return (
    <React.Fragment>
      <div
        ref={dropRef}
        className={classNames(
          'droppable-area',
          className && className,
        )
      }>
        {basket.map((item : DraggableCardProps, index) => (
          <DraggableCardPut
            key={item.id}
            id={item.id}
            index={index}
            name={item.name}
            timing={item.timing}
            onTimingChange={onTimingChange}
            type={`${type}_replacable`}
            onRemove={onRemove}
            onMove={onMove}
          />
        ))}
        {isOver && (
          <div className="droppable-area__drop-place">
            Переместите сюда
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default DroppableArea;