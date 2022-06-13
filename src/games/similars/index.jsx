import React, { useEffect, useState } from "react";
import classNames from "classnames";
import { TASKS } from "./constants/taskTitles";
import generate from "./logic/generate";
import './Similars.scss';
import { GEOMETRY } from "./figures/geometry";
import { COLORS } from './constants/colors';
import { Button, Select } from "../../components";

const GAME_STATUSES = {
  START: 'START',
  RUN: 'RUN',
  END: 'END',
}

export default function Similars(props) {
  const {
    theme,
    bigFigures, setBigFigures,
  } = props;

  const [task, setTask] = useState(null);
  const [isWon, setIsWon] = useState(false);
  const [status, setStatus] = useState(GAME_STATUSES.START);
  const [taskTitle, setTaskTitle] = useState('');
  const [mistakesCount, setMistakesCount] = useState(0);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const newTask = generate(6, GEOMETRY, COLORS);
    console.log(newTask);
    setTaskTitle({ property: newTask.property, task: newTask.task });
    setTask(newTask.objects);
  }, []);

  useEffect(() => {
    const answers = task?.filter(item => item.isActive);
    if (answers && answers.length === 2
      && answers.filter(item => item[taskTitle.property].name === taskTitle.task).length === 2
      ) {
      setIsWon(true);
      console.log(mistakesCount);
    }
    else {
      setIsWon(false);
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

  return(
    <div className={classNames(
      "game",
      theme === 'dark' && "dark-theme",
      )}>
      {status === GAME_STATUSES.END && (
        <div className="game__winning-canvas">
          <h1 className="game__winning-text">Игра завершена!</h1>
          <h2 className="game__winning-text">Молодец!</h2>
        </div>
      )}
      {status === GAME_STATUSES.RUN && task && (
        <>
          <h1 className="game-task">Найди {TASKS[taskTitle.property][taskTitle.task]}</h1>
          <div className="game-canvas">
            {
              task.map((item) => (
                  <div
                    key={item.id}
                    className={classNames(
                      'figure',
                      item.isActive && 'figure__is-active'
                    )}
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
              Выбери две фигуры, у которых цвет или форма соответствуют тем, что задал компьютер
            </div>
            <div className="game__greeting-area__func">
              <Select
                label="Выберите ребёнка"
                value={player}
                options={[]}
                onChange={(value) => setPlayer(value)}
              />
              <Button onClick={() => setStatus(GAME_STATUSES.RUN)}>Играть</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
