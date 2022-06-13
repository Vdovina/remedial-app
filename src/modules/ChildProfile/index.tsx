import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, ButtonTheme, Datepicker, Input, Select } from "../../components";
import { ROUTES } from "../../constants/routes";
import { IState } from "../../redux/store";
import DeleteIcon from '../../assets/delete.svg';
import {
  loadChildInfo,
  loadProgrammes,
  setName,
  setSurname,
  setBirthDate,
  setParentPhone,
  setDiagnosis,
  setInfo,
  setProgramme,
  saveChild,
  deleteChild,
  clearForm,
} from './redux/actions';
import { IChild } from '../../models/IChild';
import './ChildProfile.scss';
import { SelectOption } from "../../components/Select";

type ChildProfileProps = {
  
}

function ChildProfile(props: ChildProfileProps) {
  const {
    childInfo,
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
  } = useSelector((state : IState) => state.childProfile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (!childInfo.id) {
      const childId = params.id ? parseInt(params.id) : 0;
      dispatch(loadChildInfo(childId));
    }
    dispatch(loadProgrammes());
    
    return () => {
      dispatch(clearForm());
    }
  }, []);

  const onSave = () => {
    dispatch(saveChild());
    navigate(ROUTES.CHILDREN)
  }

  const onDelete = () => {
    dispatch(deleteChild());
    navigate(ROUTES.CHILDREN);
  }

  return(
    <div className="child__wrapper">
      <div className="child__header">
        <h1>{`${childInfo.name} ${childInfo.surname}`}</h1>
        <div className="child__delete-btn">
          <Button theme={ButtonTheme.light} onClick={onDelete}>
            <img className="delete-icon" src={DeleteIcon} alt="delete"/>
          </Button>
        </div>
      </div>
      <div className="child__body">
        <div className="child__form">
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Имя</label>
            </div>
            <div className="child__form__input">
              <Input
                value={name}
                onChange={(value) => dispatch(setName(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Фамилия</label>
            </div>
            <div className="child__form__input">
              <Input
                value={surname}
                onChange={(value) => dispatch(setSurname(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Дата рождения</label>
            </div>
            <div className="child__form__input">
              <Datepicker
                value={birthDate}
                onChange={(value) => dispatch(setBirthDate(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Телефон родителя</label>
            </div>
            <div className="child__form__input">
              <Input
                value={parentPhone}
                onChange={(value) => dispatch(setParentPhone(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Диагноз</label>
            </div>
            <div className="child__form__input">
              <Input
                value={diagnosis}
                onChange={(value) => dispatch(setDiagnosis(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Дополнительно</label>
            </div>
            <div className="child__form__input">
              <Input
                value={info}
                onChange={(value) => dispatch(setInfo(value))}
              />
            </div>
          </div>
          <div className="child__form__row">
            <div className="child__form__label">
              <label>Программа обучения</label>
            </div>
            <div className="child__form__input">
              <div className="child__form__input-wrapper">
              <Select
                name="programme-select"
                placeholder="Выберите программу обучения"
                value={programme}
                options={programmes}
                onChange={(value) => {
                  console.log('prog', value);
                  dispatch(setProgramme(value as SelectOption));
                }}
              />
              </div>
            </div>
          </div>
        </div>
        <div className="child__buttons">
          <Button onClick={onSave}>Сохранить</Button>
        </div>
      </div>
    </div>
  );
}

export default ChildProfile;