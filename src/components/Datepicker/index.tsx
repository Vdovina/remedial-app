import React from "react";
import moment from "moment";
import './Datepicker.scss';

interface DatepickerProps {
  value: string,
  onChange: (value: string) => void,
  label?: string,
  isDisabled?: boolean,
}

function Datepicker(props: DatepickerProps) {
  const {
    value,
    onChange,
    label,
  } = props;

  return (
    <div className="datepicker__wrapper">
      {label && (
        <label>{label}</label>
      )}
      <input
        className="datepicker"
        type="date"
        value={moment(value).format('YYYY-MM-DD')}
        onChange={(value) => onChange(value.target.value)}
      />
    </div>
  );
}

export default Datepicker;