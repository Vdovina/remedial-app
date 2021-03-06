import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TASKS } from "./constants/taskTitles";
import generate from "./logic/generate";
import { COLORS } from './constants/colors';
import { Button, Select } from "../../components";
import { SIZES } from "./constants/sizes";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import './Similars.scss';

const GAME_STATUSES = {
  START: 'START',
  RUN: 'RUN',
  END: 'END',
}

const LEVEL = 6;
const FIGURE_SIZE = 200;

export default function Similars(props) {
  const {
    theme,
    scale,
    figures,
    description,
    children,
    nextGame,
    setNextGame,
    onSave,
  } = props;

  const [task, setTask] = useState(null);
  const [status, setStatus] = useState(GAME_STATUSES.START);
  const [taskTitle, setTaskTitle] = useState('');
  const [mistakesCount, setMistakesCount] = useState(0);
  const [player, setPlayer] = useState(children[0]);
  const navigate = useNavigate();

  useEffect(() => {
    startGame()
  }, []);

  const startGame = () => {
    const newTask = generate(LEVEL, figures, COLORS);
    setTaskTitle({ property: newTask.property, task: newTask.task });
    setTask(newTask.objects);
  }

  useEffect(() => {
    const answers = task?.filter(item => item.isActive);
    if (answers && answers.length === 2
      && answers.filter(item => item[taskTitle.property].name === taskTitle.task).length === 2
      ) {
      setTimeout(() => {
        setStatus(GAME_STATUSES.END);
        if (player.value !== '*') {
           onSave(mistakesCount, 120, player.value);
        }
      }, 500);
    }
  }, [task]);

  const onSelect = (id) => {
    const newActive = task.map(
      item => (item.id === id ? {...item, isActive: !item.isActive} : item)
    );
    setTask(newActive);
    const selectedObject = task.find(item => item.id === id);
    if ((selectedObject[taskTitle.property].name !== taskTitle.task && !selectedObject.isActive)
      || (selectedObject[taskTitle.property].name === taskTitle.task && selectedObject.isActive)) {
      setMistakesCount(mistakesCount + 1);
    }
  };

  const resetGame = () => {
    setTask(null);
    setStatus(GAME_STATUSES.START);
    setTaskTitle('');
    setMistakesCount(0);
    startGame();
  }

  return(
    <div className={classNames(
      "game",
      theme === 'dark' && "dark-theme",
      )}>
      {status === GAME_STATUSES.END && (
        <div className="game__winning-canvas">
          <div className="game__greeting-area">
            <h1 className="game__winning-text">???????? ??????????????????!</h1>
            <h2 className="game__winning-text">??????????????!</h2>
            <Button
              onClick={() => navigate(ROUTES.GAMES)}
            >
              ?? ???????????????? ?? ????????????
            </Button>
            {nextGame && (
              <Button
                onClick={() => {
                  setNextGame();
                  navigate(ROUTES.GAME.replace(':game', nextGame));
                  resetGame();
                }}
              >
                ?????????????????? ????????
              </Button>
            )}
          </div>
        </div>
      )}
      {status === GAME_STATUSES.RUN && task && (
        <>
          <h1 className="game-task">?????????? {TASKS[taskTitle.property][taskTitle.task]}</h1>
          <div className="game-canvas">
            {
              task.map((item) => (
                  <div
                    key={item.id}
                    className={classNames(
                      'figure',
                      item.isActive && 'figure__is-active'
                    )}
                    style={{width: SIZES[scale]*FIGURE_SIZE, height: SIZES[scale]*FIGURE_SIZE}}
                    onClick={() => onSelect(item.id)}
                    >
                      {item.figure.draw(item.color[theme])}
                  </div>
                )
              )
            }
          </div>
        </>
      )}
      {status === GAME_STATUSES.START && (
        <div className="game__starting-canvas">
          <div className="game__greeting-area">
            <div className="game__greeting-area__rules">
              {description}
            </div>
            <div className="game__greeting-area__func">
              <Select
                label="???????????????? ??????????????"
                value={player}
                options={children}
                onChange={(value) => setPlayer(value)}
              />
              <Button onClick={() => setStatus(GAME_STATUSES.RUN)}>????????????</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
