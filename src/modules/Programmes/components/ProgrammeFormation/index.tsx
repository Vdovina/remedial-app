import React, { useCallback, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import {
  Button,
  ButtonTheme,
  Input,
} from '../../../../components';
import DraggableCard from "../DraggableCard";
import DroppableArea from "../DroppableArea";
import { IState } from "../../../../redux/store";
import {
  setProgrammeGames,
  setProgrammeName,
  setGameTiming,
  saveNewProgramme,
  saveEditProgramme,
  deleteProgramme,
} from "../../redux/actions";
import './ProgrammeFormation.scss';
import { STATUSES } from "../../constants/statuses";
import DeleteIcon from '../../../../assets/delete.svg';

export interface ProgrammeCardType {
  id: number,
  programGameId: number,
  gameId: number,
  name: string,
  timing: number,
}

type ProgrammeCardTypeFunction = (state: ProgrammeCardType[]) => ProgrammeCardType[];

function ProgrammeFormation() {
  const GAME_CARD_TYPE = 'game';

  const dispatch = useDispatch();
  const {
    form: {
      programmeName,
      programmeGames,
      status,
      id,
    },
    games,
  } = useSelector((state : IState) => state.programmes);

  const setProgrammeContent = useCallback((value: ProgrammeCardType[] | ProgrammeCardTypeFunction) => {
    if (typeof value === 'function') {
      const result = value(programmeGames);
      dispatch(setProgrammeGames(result))
    }
    else {
      dispatch(setProgrammeGames(value));
    }
  }, [programmeGames]);

  const onSave = () => {
    if (status === STATUSES.NEW) {
      dispatch(saveNewProgramme());
    }
    if (status === STATUSES.EDIT) {
      dispatch(saveEditProgramme());
    }
  };

  const onDelete = () => {
    if (status === STATUSES.EDIT && id) {
      dispatch(deleteProgramme());
    }
  };

  const totalTiming = useMemo(() => programmeGames.reduce((res, game) => (res + game.timing), 0), [programmeGames]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="programmes__game-list__wrapper">
        <div className="programmes__game-list">
          <p className="programmes__programme-list__title">Игры</p>
          <div className="programmes__list">
            {games.map(game => (
              <DraggableCard
                key={game.id}
                id={game.id}
                name={game.name}
                timing={game.defaultTiming}
                type={GAME_CARD_TYPE}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="programmes__new-area__wrapper">
        <div className="programmes__new-area">
          <div className="programmes__new-area__header">
            <Input
              placeholder="Новая программа"
              value={programmeName}
              onChange={(value) => dispatch(setProgrammeName(value))}
            />
            {status === STATUSES.EDIT && (
              <div className="programmes__delete-btn">
                <Button theme={ButtonTheme.light} onClick={onDelete}>
                  <img className="delete-icon" src={DeleteIcon} alt="delete"/>
                </Button>
              </div>
            )}
          </div>
          <div className="programmes__draggable-area">
            <DroppableArea
              basket={programmeGames}
              setBasket={setProgrammeContent}
              onTimingChange={(id, timing) => dispatch(setGameTiming(id, timing))}
              type={GAME_CARD_TYPE}
            />
          </div>
        </div>
        <div className="programmes__new-area__footer">
          {status === STATUSES.FAILED && (
            <p className="programmes__new-area__error-msg">Произошла ошибка! Попробуйте ещё раз!</p>
          )}
          <div className="programmes__new-area__total">
            <Button
              disabled={programmeName === '' || programmeGames?.length === 0}
              onClick={onSave}
            >
              Сохранить
            </Button>
            <div className="programmes__new-area__total-time">
              <p className="programmes__new-area__total-time__title">Общее время:</p>
              <p className="programmes__new-area__total-time__time">
                {`${
                  String(Math.floor(totalTiming / 60)).padStart(2, '0')
                  }:${
                  String(totalTiming % 60).padStart(2, '0')
                  }`}
              </p>
              {/* <DurationInput
                // value={totalTiming}
                // setValue={() => {}}
                value={time}
                setValue={setTime}
                disabled={true}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}

export default ProgrammeFormation;