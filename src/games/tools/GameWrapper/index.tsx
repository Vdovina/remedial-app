import React, { useState } from "react";
import { SelectOption } from "../../../components/Select";
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
  children: SelectOption[],
  nextGame: string | null,
  setNextGame: () => void,
  onSave?: (
    mistakeCount: number,
    timing: number,
    childId: number,
  ) => void,
}

export type GameTypes = 'similar_figures' | 'similar_alive' | 'similar_things';

function GameSwitch(props: GameSwitchProps) {
  const {
    isTimed,
    game,
    description,
    children,
    nextGame,
    setNextGame,
    onSave = () => {}
  } = props;
  const INITIAL_SCALE = 5;
  const ANY_CHILD_OPTION = {
    value: '*',
    label: 'Любой',
  }
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
        children={[ANY_CHILD_OPTION, ...children]}
        nextGame={nextGame}
        setNextGame={setNextGame}
        onSave={onSave}
      />
    </div>
  );
}

export default GameSwitch;