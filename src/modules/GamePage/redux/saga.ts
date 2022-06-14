import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadChildrenSuccess,
  loadChildrenFail,
  loadCurrentProgrammeSuccess,
  loadCurrentProgrammeFail,
} from './actions';
import { ERRORS } from '../../../constants/errors';
import { IChildNameListResponse } from '../../../models/IChild';
import ChildService from '../../../services/API/ChildService';
import { IResponse } from '../../../models/IResponse';
import GameService from '../../../services/API/GameService';
import { IGame, IProgrammeGame, IProgrammeGameResponse } from '../../../models/IGame';
import ProgrammeService from '../../../services/API/ProgramService';
import { IProgramWithGamesResponse } from '../../../models/IProgramme';
import { games } from '../../../constants/data';
import { ROUTES } from '../../../constants/routes';

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

export function* fetchProgramme(props: any) {
  try {
    const { user: { token }} = yield select(({ auth }) => auth);
    const { id, navigate} = props.payload;
    const result: IProgramWithGamesResponse = yield call(ProgrammeService.getWithGames, token);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_PROGRAMME_ERROR;
    }
    const currentProgram = result.resultData?.find(
      programme => programme.id === id
    );
    if (currentProgram) {
      const processedProgramme = currentProgram.games.sort(
        (a, b) => a.gameOrder - b.gameOrder
      );
      yield put(loadCurrentProgrammeSuccess(processedProgramme));
      navigate(ROUTES.GAME.replace(':game', processedProgramme[0].gameCode || 'similar_figures'));
    }
  }
  catch (error) {
    console.error(error);
    yield put(loadCurrentProgrammeFail(error));
  }
}

export default function* gamePageSaga() {
  yield takeLatest([ACTIONS.LOAD_CHILDREN], loadChildren);
  yield takeLatest([ACTIONS.SAVE_RESULTS], saveResults);
  yield takeLatest([ACTIONS.LOAD_CURRENT_PROGRAMME], fetchProgramme);
}