import React, { useState } from "react";
import classNames from "classnames";
import Select from "react-select";
import './Select.scss';

interface SelectProps {
  name?: string,
  value: any,
  label?: string,
  options: SelectOption[],
  placeholder?: string,
  isMulti?: boolean,
  isDisabled?: boolean,
  selectAll?: boolean,
  onChange: (value: SelectOption | SelectOption[]) => void,
}

export interface SelectOption {
  value: any,
  label: string,
}

export const SELECT_ALL = { label: 'Все', value: '*' };

function SelectInput(props: SelectProps) {
  const {
    value,
    options,
    label,
    isMulti,
    isDisabled,
    selectAll,
    placeholder = 'Выберите из списка',
  } = props;

  const customSelectStyles = {
    control: (styles: any) => ({
      ...styles,
      minWidth: 80,
      borderColor: 'rgba(171, 171, 192, 0.3)',
      borderRadius: 6,
    })
  };

  return(
    <div className="select-input__wrapper">
      {label && (
        <label>{label}</label>
      )}
      <Select
        {...props}
        styles={customSelectStyles}
        className={classNames(
          'custom-select',
          isDisabled && 'custom-select__disabled',
          )}
          classNamePrefix="custom-select"
          options={options.length > 0 && selectAll ? [SELECT_ALL, ...options] : options}
          closeMenuOnSelect={!isMulti}
          menuIsOpen={isDisabled ? false : undefined}
          noOptionsMessage={() => 'Не найдено'}
          isClearable
          placeholder={placeholder}
      />
    </div>
  );
}

export default SelectInput;