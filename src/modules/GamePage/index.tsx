import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import { Game } from "../../games";
import { GameTypes } from "../../games/tools/GameWrapper";
import { games } from "../../constants/data";
import './GamePage.scss';

function GamePage() {
  const params = useParams();
  const gameType = useMemo(() => params.game, [params]);
  return (
    <div className="game__wrapper">
      <Game
        isTimed
        game={gameType as GameTypes || 'similar_figures'}
        description='Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер'
      />
    </div>
  );
}

export default GamePage;