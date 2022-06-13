import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Select,
  Datepicker,
  Button,
  ButtonTheme,
} from '../../../../components';
import { SelectOption } from "../../../../components/Select";
import { IState } from "../../../../redux/store";
import {
  loadStatistics,
  loadChildren,
  loadGames,
  setChildren,
  setGames,
  setSinceDate,
  setTillDate,
} from '../../redux/actions';
import './Filter.scss';

function Filter() {
  const { options, filter} = useSelector((state: IState) => state.statistics);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadChildren());
    dispatch(loadGames());
  }, []);

  const onFind = () => {
    dispatch(loadStatistics());
  }
  
  return (
    <div className="statistics__filter-panel">
      <div className="statistics__filter-item">
        <Select
          label='Дети'
          value={filter.children}
          options={options.children}
          placeholder='Все'
          onChange={(value) => dispatch(setChildren(value as SelectOption[]))}
          isMulti={true}
        />
      </div>
      <div className="statistics__filter-item">
        <Select
          label='Игры'
          value={filter.games}
          options={options.games}
          placeholder='Все'
          onChange={(value) => dispatch(setGames(value as SelectOption))}
        />
      </div>
      <div className="statistics__filter-item">
        <Datepicker
          label='Период с'
          value={filter.since}
          onChange={(value) => dispatch(setSinceDate(value))}
        />
      </div>
      <div className="statistics__filter-item">
        <Datepicker
          label='Период по'
          value={filter.till}
          onChange={(value) => dispatch(setTillDate(value))}
        />
      </div>
      <div className="statistics__filter-item">
        <Button
          theme={ButtonTheme.light}
          onClick={onFind}
        >
          <div className="statistics__filter__btn">Показать</div>
        </Button>
      </div>
    </div>
  );
}

export default Filter;