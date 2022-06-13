import React, { useState } from "react";
import {
  Similars,
  TimerPanel,
} from '../../index';
import { GameThemeType } from "../TimerPanel";

interface GameSwitchProps {
  isTimed: boolean,
  game: GameTypes,
}

export type GameTypes = 'similars';

function GameSwitch(props: GameSwitchProps) {
  const {
    isTimed,
    game,
  } = props;
  const [toolsOpen, setToolsOpen] = useState(false);
  const [theme, setTheme] = useState<GameThemeType>('light');
  const [bigFigures, setBigFigures] = useState(false);

  return (
    <div className="game-area">
      <TimerPanel
        toolsOpen={toolsOpen}
        setToolsOpen={setToolsOpen}
        theme={theme}
        setTheme={setTheme}
        bigFigures={bigFigures}
        setBigFigures={setBigFigures}
      />
      <Similars
        theme={theme}
        setTheme={setTheme}
        bigFigures={bigFigures}
        setBigFigures={setBigFigures}
      />
    </div>
  );
}

export default GameSwitch;