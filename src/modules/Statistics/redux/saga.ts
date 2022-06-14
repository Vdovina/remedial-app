import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadStatisticsSuccess,
  loadStatisticsFail,
  loadChildrenSuccess,
  loadChildrenFail,
  loadGamesFail,
  loadGamesSuccess
} from './actions';
import { IGame, IGameListResponse } from '../../../models/IGame';
import { IChildListResponse, IChildName } from '../../../models/IChild';
import ChildService from '../../../services/API/ChildService';
import { ERRORS } from '../../../constants/errors';
import { SelectOption } from '../../../components/Select';
import GameService from '../../../services/API/GameService';
import { statisticsData } from '../../../constants/data';
import { StatisticsService } from '../../../services/API/StatisticsService';
import { IResponse } from '../../../models/IResponse';

export function* fetchStatistics() {
  try {
    const { filter } = yield select(state => state.statistics);
    const result: IResponse = yield call(StatisticsService.get, filter);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_STATISTIC_DATA_ERROR;
    }
    yield put(loadStatisticsSuccess(result.resultData));
  }
  catch (error) {
    console.error(error);
    yield put(loadStatisticsFail(error));
  }
}

export function* fetchChildren() {
  try {
    const { user: { token }} = yield select(({ auth }) => auth);
    const result : IChildListResponse = yield call(
      ChildService.getNames, token);

    if (!result.isSucceeded) {
      throw ERRORS.LOAD_CHILDREN_ERROR;
    }
    const processedChildren : SelectOption[] = result.resultData?.map(
      child => ({
        value: child.id,
        label: `${child.surname} ${child.name}`,
      })
    );
    yield put(loadChildrenSuccess(processedChildren));
  }
  catch (error) {
    console.error(error);
    yield put(loadChildrenFail(error));
  }
}

export function* fetchGames() {
  try {
    const result : IGameListResponse = yield call(GameService.get);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_GAMES_ERROR;
    }
    const processedGames : SelectOption[] = result.resultData?.map(
      game => ({
        value: game.id,
        label: game.name,
      })
    );
    yield put(loadGamesSuccess(processedGames));
  }
  catch (error) {
    console.error(error);
    yield put(loadGamesFail(error));
  }
}

export default function* statistics() {
  yield takeLatest([ACTIONS.LOAD_STATISTICS], fetchStatistics);
  yield takeLatest([ACTIONS.LOAD_CHILDREN], fetchChildren);
  yield takeLatest([ACTIONS.LOAD_GAMES], fetchGames);
}