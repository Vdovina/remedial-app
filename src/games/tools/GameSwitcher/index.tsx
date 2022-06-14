import React, { useMemo } from "react";
import { GameTypes } from "../GameWrapper";
import { Similars } from '../../index';
import { GameThemeType } from "../TimerPanel";
import { GEOMETRY } from "../../similars/figures/geometry";
import { ALIVE } from "../../similars/figures/alive";
import { THINGS } from "../../similars/figures/things";
import { SelectOption } from "../../../components/Select";

interface GameSwitcherProps {
  game: GameTypes,
  description: string,
  theme: GameThemeType,
  setTheme: (value: GameThemeType) => void,
  scale: number,
  setScale: (value: number) => void,
  children: SelectOption[],
  nextGame: string | null,
  setNextGame: () => void,
  onSave: (
    mistakeCount: number,
    timing: number,
    childId: number,
  ) => void,
}

function GameSwitcher({
  game,
  description,
  theme, setTheme,
  scale, setScale,
  children,
  nextGame,
  setNextGame,
  onSave,
} : GameSwitcherProps) {
  const gameSwitcher = (game: GameTypes) => {
    switch(game) {
      case 'similar_things': {
        return THINGS;
      }
      case 'similar_alive': {
        return ALIVE;
      }
      case 'similar_figures': {
        return GEOMETRY;
      }
      default:
        return GEOMETRY;
    }
  };

  const currentGame = useMemo(() => gameSwitcher(game), []);

  return (
    <Similars
      figures={currentGame}
      description={description}
      theme={theme}
      setTheme={setTheme}
      scale={scale}
      setScale={setScale}
      children={children}
      nextGame={nextGame}
      setNextGame={setNextGame}
      onSave={onSave}
    />
  );
}

export default GameSwitcher;