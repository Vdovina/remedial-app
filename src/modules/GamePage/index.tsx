import React from "react";
import {
  Similars,
  TimerPanel,
  GameWrapper,
} from "../../games";
// import Similars from '../../games/similars';
import './GamePage.scss';

function GamePage() {
  return (
    <div className="game__wrapper">
      <GameWrapper isTimed game='similars' />
    </div>
  );
}

export default GamePage;