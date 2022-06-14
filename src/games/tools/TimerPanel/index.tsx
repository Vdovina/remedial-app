import React, { useState } from "react";
import { Timer } from "../components/Timer";
import ToolsIcon from '../../../assets/tools.svg';
import ScalePlusIcon from '../../../assets/scale-plus.svg';
import ScaleMinusIcon from '../../../assets/scale-minus.svg';
import { ToolButton } from "../components/ToolButton";
import { SIZES } from "../../similars/constants/sizes";

interface TimerPanelProps {
  toolsOpen: boolean,
  setToolsOpen: (value: boolean) => void;
  theme: GameThemeType,
  setTheme: (value: GameThemeType) => void,
  scale: number,
  setScale: (value: number) => void,
}

export type GameThemeType = 'light' | 'dark';

function TimerPanel(props: TimerPanelProps) {
  const {
    toolsOpen, setToolsOpen,
    theme, setTheme,
    scale, setScale,
  } = props;

  const onZoomIn = () => {
    if (scale < SIZES.length) {
      setScale(scale + 1);
    }
  };

  const onZoomOut = () => {
    if (scale > 0) {
      setScale(scale - 1);
    }
  };

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
              <ToolButton
                disabled={scale === SIZES.length - 1}
                onClick={onZoomIn}
              >
                <img className="tools-panel__btn__icon" src={ScalePlusIcon} alt="plus" />
              </ToolButton>
              <ToolButton
                disabled={scale === 0}
                onClick={onZoomOut}
              >
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