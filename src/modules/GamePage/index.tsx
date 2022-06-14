import React, { useEffect, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../games";
import { GameTypes } from "../../games/tools/GameWrapper";
import { games } from "../../constants/data";
import {
  loadChildren,
  saveResults,
  setCurrentGame,
} from './redux/actions';
import { useDispatch, useSelector } from "react-redux";
import './GamePage.scss';
import { IState } from "../../redux/store";

function GamePage() {
  const params = useParams();
  const gameType = useMemo(() => params.game, [params]);
  const dispatch = useDispatch();
  const { children } = useSelector((state: IState) => state.gamePage);

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

  return (
    <div className="game__wrapper">
      <Game
        isTimed
        game={gameType as GameTypes || 'similar_figures'}
        description='Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер'
        children={children || []}
        onSave={saveGameResult}
      />
    </div>
  );
}

export default GamePage;