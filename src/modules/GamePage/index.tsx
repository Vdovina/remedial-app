import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../games";
import { GameTypes } from "../../games/tools/GameWrapper";
import { games } from "../../constants/data";
import {
  loadChildren,
  saveResults,
  setCurrentGame,
  setCurrentGameOrder,
} from './redux/actions';
import { useDispatch, useSelector } from "react-redux";
import './GamePage.scss';
import { IState } from "../../redux/store";

function GamePage() {
  const params = useParams();
  const gameType = useMemo(() => params.game, [params]);
  const dispatch = useDispatch();
  const {
    children,
    currentProgramme,
    currentGameOrder,
  } = useSelector((state: IState) => state.gamePage);

  useEffect(() => {
    const currentGame = games.find(game => game.code === gameType);
    dispatch(setCurrentGame(currentGame));
    dispatch(loadChildren());
  }, []);

  const saveGameResult = (
    mistakeCount: number,
    timing: number,
    childId: number,
  ) => {
    dispatch(saveResults(mistakeCount, timing, childId));
  }

  const nextGame = useMemo(() => {
    if (
        currentGameOrder !== null
        && currentProgramme
        && currentProgramme?.length > currentGameOrder + 1
      ) {
      return(currentProgramme[currentGameOrder + 1]['gameCode'])
    }
    return null;
  }, [currentGameOrder]);

  return (
    <div className="game__wrapper">
      <Game
        isTimed
        game={gameType as GameTypes || 'similar_figures'}
        description='Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер'
        children={children || []}
        nextGame={nextGame}
        setNextGame={() => dispatch(setCurrentGameOrder())}
        onSave={saveGameResult}
      />
    </div>
  );
}

export default GamePage;