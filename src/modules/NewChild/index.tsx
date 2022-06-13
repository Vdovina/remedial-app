import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ROUTES } from "../../constants/routes";
import {
  Button,
  ButtonTheme,
  Datepicker,
  Input,
  Select,
} from '../../components';
import { IState } from "../../redux/store";
import {
  setName,
  setSurname,
  setBirthDate,
  setParentPhone,
  setDiagnosis,
  setInfo,
  setProgramme,
  loadProgrammes,
  saveNewChild,
} from './redux/actions';
import './NewChild.scss';
import { SelectOption } from "../../components/Select";

type NewChildProps = {
  
}

function NewChild(props : NewChildProps) {
  const {
    form: {
      name,
      surname,
      birthDate,
      parentPhone,
      diagnosis,
      info,
      programme,
    },
    options: {
      programmes,
    }
  } = useSelector((state : IState) => state.newChildCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadProgrammes());
  }, []);

  const onSave = () => {
    dispatch(saveNewChild());
    navigate(ROUTES.CHILDREN)
  }

  return(
    <div className="new-child__wrapper">
      <div className="new-child__header">
        <h1>Добавление нового ребёнка</h1>
      </div>
      <div className="new-child__body">
        <div className="new-child__form">
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Имя</label>
            </div>
            <div className="new-child__form__input">
              <Input
                value={name}
                onChange={(value) => dispatch(setName(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Фамилия</label>
            </div>
            <div className="new-child__form__input">
              <Input
                value={surname}
                onChange={(value) => dispatch(setSurname(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Дата рождения</label>
            </div>
            <div className="new-child__form__input">
              <Datepicker
                value={birthDate}
                onChange={(value) => dispatch(setBirthDate(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Телефон родителя</label>
            </div>
            <div className="new-child__form__input">
              <Input
                value={parentPhone}
                onChange={(value) => dispatch(setParentPhone(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Диагноз</label>
            </div>
            <div className="new-child__form__input">
              <Input
                value={diagnosis}
                onChange={(value) => dispatch(setDiagnosis(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Дополнительно</label>
            </div>
            <div className="new-child__form__input">
              <Input
                value={info}
                onChange={(value) => dispatch(setInfo(value))}
              />
            </div>
          </div>
          <div className="new-child__form__row">
            <div className="new-child__form__label">
              <label>Программа обучения</label>
            </div>
            <div className="new-child__form__input">
              <div className="new-child__form__input-wrapper">
              <Select
                name="programme-select"
                placeholder="Выберите программу обучения"
                value={programme}
                options={programmes}
                onChange={(value) => dispatch(setProgramme(value as SelectOption))}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="new-child__buttons">
          <Button
            disabled={!(name && surname && birthDate)}
            onClick={onSave}
          >
            Сохранить
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NewChild;