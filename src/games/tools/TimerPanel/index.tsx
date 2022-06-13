import React, { useState } from "react";
import { Timer } from "../components/Timer";
import ToolsIcon from '../../../assets/tools.svg';
import ScalePlusIcon from '../../../assets/scale-plus.svg';
import ScaleMinusIcon from '../../../assets/scale-minus.svg';
import { ToolButton } from "../components/ToolButton";

interface TimerPanelProps {
  toolsOpen: boolean,
  setToolsOpen: (value: boolean) => void;
  theme: GameThemeType,
  setTheme: (value: GameThemeType) => void,
  bigFigures: boolean,
  setBigFigures: (value: boolean) => void,
}

export type GameThemeType = 'light' | 'dark';

function TimerPanel(props: TimerPanelProps) {
  const {
    toolsOpen, setToolsOpen,
    theme, setTheme,
    bigFigures, setBigFigures,
  } = props;
  return (
    <>
      <div className="tool-panel__wrapper">
      <div className="tool-panel">
        <div className="timer">
          <Timer />
        </div>
        <div className="tool-btn" onClick={() => setToolsOpen(!toolsOpen)}>
          <img className="tool-btn__icon" src={ToolsIcon} alt="tools" />
        </div>
      </div>
      {toolsOpen &&
        <div className="tools-panel__wrapper">
          <div className="tools-panel">
            <div className="tools-panel__btn-group">
              <ToolButton onClick={() => setBigFigures(true)}>
                <img className="tools-panel__btn__icon" src={ScalePlusIcon} alt="plus" />
              </ToolButton>
              <ToolButton onClick={() => setBigFigures(false)}>
                <img className="tools-panel__btn__icon" src={ScaleMinusIcon} alt="plus" />
              </ToolButton>
            </div>
            <div className="tools-panel__btn-group">
              <ToolButton onClick={() => setTheme('light')}>
                <p className="tools-panel__btn__color-tool">A</p>
              </ToolButton>
              <ToolButton className="dark-btn" onClick={() => setTheme('dark')}>
                <p className="tools-panel__btn__color-tool">A</p>
              </ToolButton>
            </div>
            {/* <div className="tools-panel__btn-group">
              <Checkbox
                label="Стандартный курсор"
                value={false}
                onChange={() => {}}
              />
            </div> */}
          </div>
        </div>
        }
    </div>
  </>
  );
}

export default TimerPanel;