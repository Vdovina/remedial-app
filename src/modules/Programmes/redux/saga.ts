import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadProgrammesSuccess,
  loadProgrammesFail,
  loadGamesSuccess,
  loadGamesFail,
  saveNewProgrammeSuccess,
  saveNewProgrammeFail,
  saveEditProgrammeSuccess,
  saveEditProgrammeFail,
  deleteProgrammeSuccess,
  deleteProgrammeFail,
  startNewProgramme,
} from './actions';
import { IGame, IGameListResponse, IProgrammeGame } from '../../../models/IGame';
import ProgrammeService from '../../../services/API/ProgramService';
import { IProgramme, IProgrammeListResponse, IProgrammesResponse } from '../../../models/IProgramme';
import { ERRORS } from '../../../constants/errors';
import { ProgrammeCardType } from '../components/ProgrammeFormation';
import { IResponse } from '../../../models/IResponse';
import GameService from '../../../services/API/GameService';

export function* fetchProgrammes() {
  try {
    const { user: { userId }} = yield select(({ auth }) => auth);
    const result : IProgrammesResponse = yield call(ProgrammeService.get, userId);
    if (result.isSucceeded) {
      yield put(loadProgrammesSuccess(result.resultData));
    }
    else {
      throw ERRORS.LOAD_PROGRAMMES_ERROR;
    }
  }
  catch (error) {
    yield put(loadProgrammesFail(error));
  }
}

export function* fetchGames() {
  try {
    const result : IGameListResponse = yield call(GameService.getGames);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_GAMES_ERROR;
    }
    yield put(loadGamesSuccess(result.resultData));
  }
  catch (error) {
    yield put(loadGamesFail(error));
  }
}

export function* saveProgramme() {
  try {
    const { user: { userId }} = yield select(({ auth }) => auth);
    const { form: { programmeName, programmeGames } } = yield select(({ programmes }) => programmes);

    const games = programmeGames?.map(
      (game: ProgrammeCardType, index: number) => ({
        gameOrder: index,
        gameTiming: game.timing,
        gameID: game.gameId,
      } as IProgrammeGame)
    ) as IProgrammeGame[];

    const result : IResponse = yield call(ProgrammeService.save, userId, programmeName, games);
    if (!result.isSucceeded) {
      throw ERRORS.SAVE_PROGRAMME_ERROR;
    }
    yield put(saveNewProgrammeSuccess());
    yield put(startNewProgramme());
  }
  catch (error) {
    console.error(error);
    yield put(saveNewProgrammeFail(error));
  }
}

export function* editProgramme() {
  try {
    const { form: { id, programmeName, programmeGames } } = yield select(({ programmes }) => programmes);
    if (id) {
      const games = programmeGames?.map(
        (game: ProgrammeCardType, index: number) => ({
          id: game.programGameId || null,
          gameOrder: index,
          gameTiming: game.timing,
          gameID: game.gameId,
        } as IProgrammeGame)
      ) as IProgrammeGame[];
      const result : IResponse = yield call(ProgrammeService.edit, id, programmeName, games);

      if (!result.isSucceeded) {
        throw ERRORS.SAVE_PROGRAMME_ERROR;
      }
      yield put(saveEditProgrammeSuccess());
      yield put(startNewProgramme());
    }
    else {
      throw ERRORS.UNKNOWN_PROGRAMME;
    }
  }
  catch (error) {
    console.error(error);
    yield put(saveEditProgrammeFail(error));
  }
}

export function* deleteProgramme() {
  try {
    const { form: { id } } = yield select(({ programmes }) => programmes);
    if (id) {
      yield call(ProgrammeService.delete, id);

      yield put(deleteProgrammeSuccess());
      yield put(startNewProgramme());
    }
    else {
      throw ERRORS.UNKNOWN_PROGRAMME;
    }
  }
  catch (error) {
    console.error(error);
    yield put(deleteProgrammeFail(error));
  }
}

export default function* programmes() {
  yield takeLatest([
    ACTIONS.LOAD_PROGRAMMES,
    ACTIONS.SAVE_NEW_PROGRAMME_SUCCESS,
    ACTIONS.SAVE_EDIT_PROGRAMME_SUCCESS,
    ACTIONS.DELETE_PROGRAMME_SUCCESS,
  ], fetchProgrammes);
  yield takeLatest([ACTIONS.LOAD_GAMES], fetchGames);
  yield takeLatest([ACTIONS.SAVE_NEW_PROGRAMME], saveProgramme);
  yield takeLatest([ACTIONS.SAVE_EDIT_PROGRAMME], editProgramme);
  yield takeLatest([ACTIONS.DELETE_PROGRAMME], deleteProgramme);
}