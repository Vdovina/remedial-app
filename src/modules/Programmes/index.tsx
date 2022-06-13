import React, { useEffect } from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { IState } from "../../redux/store";
import {
  loadProgrammes,
  loadGames,
  startNewProgramme,
  startEditProgramme,
} from "./redux/actions";
import ProgrammeFormation from "./components/ProgrammeFormation";
import './Programmes.scss';

function Programmes() {
  const {
    programmes,
    // games
    form: { id },
  } = useSelector((state : IState) => state.programmes);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadProgrammes());
    dispatch(loadGames());
  }, []);

  const onEditProgramme = (id: number) => {
    dispatch(startEditProgramme(id));
  };

  return (
    <div className="programmes__wrapper">
      <div className="programmes__header">
        <h1>Программы обучения</h1>
      </div>
      <div className="programmes__content">
        <div className="programmes__programme-list__wrapper">
          <div className="programmes__programme-list">
            <p className="programmes__programme-list__title">Программы</p>
            <div className="programmes__list">
              {programmes.map(programme => (
                <div
                  className={classNames(
                    'programmes__list__item',
                    id && id === programme.id && 'programmes__list__item--active'
                  )}
                  key={programme.id}
                  onClick={() => onEditProgramme(programme.id)}
                >
                  {programme.name}
                </div>
              ))}
              <div
                className="programmes__list__item programmes__list__item--new"
                key={'new_programme'}
                onClick={() => dispatch(startNewProgramme())}
              >
                + Новая программа
              </div>
            </div>
          </div>
        </div>
        <ProgrammeFormation />
      </div>
    </div>
  );
}

export default Programmes;