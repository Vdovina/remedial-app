import React from "react";
import { useSelector } from "react-redux";
import { LOADING_STATUS } from "../../constants/loadingStatuses";
import { IState } from "../../redux/store";
import { ChartSection, Filter } from "./components";
import './Statistics.scss';

function Statistics() {
  const {
    statistics,
    isLoading,
  } = useSelector((state: IState) => state.statistics);

  return (
    <div className="statistics__wrapper">
      <div className="statistics__filter">
        <Filter />
      </div>
      <div className="statistics__container">
        {isLoading === LOADING_STATUS.LOADING && (
          <div>Загрузка...</div>
        )}
        {isLoading === LOADING_STATUS.DONE && statistics && (
          <ChartSection />
        )}
      </div>
    </div>
  );
}

export default Statistics;