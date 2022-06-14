import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadGamesSuccess,
  loadGamesFail,
} from './actions';
import { IGameListResponse } from '../../../models/IGame';
import GameService from '../../../services/API/GameService';
import { ERRORS } from '../../../constants/errors';

export function* loadGames() {
  try {
    const result : IGameListResponse = yield call(GameService.get);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_GAMES_ERROR;
    }
    yield put(loadGamesSuccess(result.resultData));
  }
  catch (error) {
    yield put(loadGamesFail(error));
  }
}

export default function* newChildSaga() {
  yield takeLatest([ACTIONS.LOAD_GAMES], loadGames);
}