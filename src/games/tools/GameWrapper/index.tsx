import React, { useState } from "react";
import {
  Similars,
  TimerPanel,
  GameSwitcher,
} from '../../index';
import { ALIVE } from "../../similars/figures/alive";
import { GameThemeType } from "../TimerPanel";

interface GameSwitchProps {
  isTimed: boolean,
  game: GameTypes,
  description: string,
}

export type GameTypes = 'similar_figures' | 'similar_alive' | 'similar_things';

function GameSwitch(props: GameSwitchProps) {
  const {
    isTimed,
    game,
    description,
  } = props;
  const INITIAL_SCALE = 5;
  const [toolsOpen, setToolsOpen] = useState(false);
  const [theme, setTheme] = useState<GameThemeType>('light');
  const [scale, setScale] = useState(INITIAL_SCALE);

  return (
    <div className="game-area">
      {isTimed && (
        <TimerPanel
          toolsOpen={toolsOpen}
          setToolsOpen={setToolsOpen}
          theme={theme}
          setTheme={setTheme}
          scale={scale}
          setScale={setScale}
        />
      )}
      <GameSwitcher
        game={game}
        description={description}
        theme={theme}
        setTheme={setTheme}
        scale={scale}
        setScale={setScale}
      />
    </div>
  );
}

export default GameSwitch;