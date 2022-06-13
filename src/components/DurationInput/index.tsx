import React, { useState } from "react";
import './DurationInput.scss';

interface DurationInputProps {
  value: number,
  setValue: (value: number) => void,
  step?: number,
  disabled?: boolean,
}

function DurationInput({
  value,
  setValue,
  step = 1,
  disabled = false,
} : DurationInputProps) {
  const [minutes, setMinutes] = useState<string>(String(Math.floor(value / 60)).padStart(2, '0'));
  const [seconds, setSeconds] = useState<string>(String(value % 60).padStart(2, '0'));

  return (
    <div className="duration-input">
      <input
        className="duration-input__input"
        disabled={disabled}
        maxLength={2}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        value={minutes}
        onChange={(e) => {
          setMinutes(e.target.value);
          if (e.target.value) {
            setValue(parseInt(e.target.value) * 60 + parseInt(seconds));
          }
        }}
        onBlur={(e) => {
          setMinutes(minutes.padStart(2, '0'));
        }}
      />
      <span>:</span>
      <input
        className="duration-input__input"
        disabled={disabled}
        maxLength={2}
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        value={seconds}
        onChange={(e) => {
          setSeconds(e.target.value);
          if (e.target.value) {
            setValue(parseInt(minutes) * 60 + parseInt(e.target.value));
          }
        }}
        onBlur={(e) => {
          setSeconds(seconds.padStart(2, '0'));
        }}
      />
      {!disabled && (
        <div className="duration-input__arrows">
          <button
            className="duration-input__arrows"
            onClick={() => {
              const valueUp = value + step;
              setValue(valueUp);
              setMinutes(String(Math.floor(valueUp / 60)).padStart(2, '0'));
              setSeconds(String(valueUp % 60).padStart(2, '0'));
            }}
          >
            <div className="duration-input__arrows__triangle duration-input__arrows__triangle--up"></div>
          </button>
          <button
            className="duration-input__arrows"
            onClick={() => {
              const valueDown = value - step;
              if (valueDown >= 0) {
                setValue(valueDown);
                setMinutes(String(Math.floor(valueDown / 60)).padStart(2, '0'));
                setSeconds(String(valueDown % 60).padStart(2, '0'));
              }
            }}
          >
            <div className="duration-input__arrows__triangle duration-input__arrows__triangle--down"></div>
          </button>
        </div>
      )}
    </div>
  );
}

export default DurationInput;