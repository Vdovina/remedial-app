import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadChildrenSuccess,
  loadChildrenFail,
} from './actions';
import { ERRORS } from '../../../constants/errors';
import { IChildNameListResponse } from '../../../models/IChild';
import ChildService from '../../../services/API/ChildService';
import { IResponse } from '../../../models/IResponse';
import GameService from '../../../services/API/GameService';
import { IGame } from '../../../models/IGame';

export function* loadChildren() {
  try {
    const { user: { token }} = yield select(({ auth }) => auth);
    const result : IChildNameListResponse = yield call(ChildService.getNames, token);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_CHILDREN_ERROR;
    }
    const processedChildren  = result.resultData?.map(
      child => ({
        value: child.id,
        label: `${child.surname} ${child.name}`,
      })
    );
    yield put(loadChildrenSuccess(processedChildren));
  }
  catch (error) {
    yield put(loadChildrenFail(error));
  }
}

export function* saveResults(props: any) {
  try {
    const { mistakeCount, timing, childId } = props.payload;
    debugger;
    const { id } : IGame = yield select(({ gamePage }) => gamePage.currentGame);
    const result : IResponse = yield call(
      GameService.saveResults,
      mistakeCount,
      timing,
      childId,
      id
    );
    if (!result.isSucceeded) {
      throw ERRORS.SAVE_GAME_RESULTS_ERROR;
    }
  }
  catch (error) {
    console.error(error);
  }
}

export default function* gamePageSaga() {
  yield takeLatest([ACTIONS.LOAD_CHILDREN], loadChildren);
  yield takeLatest([ACTIONS.SAVE_RESULTS], saveResults);
}