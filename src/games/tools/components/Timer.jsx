import React, { useEffect } from "react";

export function Timer() {
  const [ seconds, setSeconds ] = React.useState(0);
  const [ timerActive, setTimerActive ] = React.useState(false);

  React.useEffect(() => {
    if (seconds > 0 && timerActive) {
      setTimeout(setSeconds, 1000, seconds - 1);
    } else {
      setTimerActive(false);
    }
  }, [ seconds, timerActive ]);

  return (
    <div className="timer__container">
      {seconds
        ? <React.Fragment>
            <button onClick={() => setTimerActive(!timerActive)}>
              {timerActive ? 'stop' : 'start'}
            </button>
            <div className="timer__time">
              <div>{String(Math.floor(seconds / 60)).padStart(2, '0')}</div>
              :
              <div>{String(seconds % 60).padStart(2, '0')}</div>
            </div>
          </React.Fragment>
        : <button
            onClick={() => {
              setSeconds(180);
            }}
          >
            ещё раз
          </button>
      }
    </div>
  );
}