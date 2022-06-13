import { IGame } from "../../../models/IGame";
import { IProgramme } from "../../../models/IProgramme";
import { ProgrammeCardType } from "../components/ProgrammeFormation";
import { ACTIONS } from "./constants";

export const setProgrammeGames = (values: ProgrammeCardType[]) => ({
  type: ACTIONS.SET_PROGRAMME_GAMES,
  payload: values,
});

export const setGameTiming = (id: number, timing: number) => ({
  type: ACTIONS.SET_GAME_TIME,
  payload: { id, timing },
});

export const setProgrammeName = (value: string) => ({
  type: ACTIONS.SET_PROGRAMME_NAME,
  payload: value,
});


export const loadProgrammes = () => ({
  type: ACTIONS.LOAD_PROGRAMMES,
});

export const loadProgrammesSuccess = (values: IProgramme[]) => ({
  type: ACTIONS.LOAD_PROGRAMMES_SUCCESS,
  payload: values,
});

export const loadProgrammesFail = (error: any) => ({
  type: ACTIONS.LOAD_PROGRAMMES_FAIL,
  payload: error,
});

export const loadGames = () => ({
  type: ACTIONS.LOAD_GAMES,
});

export const loadGamesSuccess = (values: IGame[]) => ({
  type: ACTIONS.LOAD_GAMES_SUCCESS,
  payload: values,
});

export const loadGamesFail = (error: any) => ({
  type: ACTIONS.LOAD_GAMES_FAIL,
  payload: error,
});


export const saveNewProgramme = () => ({
  type: ACTIONS.SAVE_NEW_PROGRAMME,
});

export const saveNewProgrammeSuccess = () => ({
  type: ACTIONS.SAVE_NEW_PROGRAMME_SUCCESS,
});

export const saveNewProgrammeFail = (error: any) => ({
  type: ACTIONS.SAVE_NEW_PROGRAMME_FAIL,
  payload: error,
});

export const saveEditProgramme = () => ({
  type: ACTIONS.SAVE_EDIT_PROGRAMME,
});

export const saveEditProgrammeSuccess = () => ({
  type: ACTIONS.SAVE_EDIT_PROGRAMME_SUCCESS,
});

export const saveEditProgrammeFail = (error: any) => ({
  type: ACTIONS.SAVE_EDIT_PROGRAMME_FAIL,
  payload: error,
});

export const deleteProgramme = () => ({
  type: ACTIONS.DELETE_PROGRAMME,
});

export const deleteProgrammeSuccess = () => ({
  type: ACTIONS.DELETE_PROGRAMME_SUCCESS,
});

export const deleteProgrammeFail = (error: any) => ({
  type: ACTIONS.DELETE_PROGRAMME_FAIL,
  payload: error,
});


export const startNewProgramme = () => ({
  type: ACTIONS.START_NEW_PROGRAMME,
});

export const startEditProgramme = (programmeId: number) => ({
  type: ACTIONS.START_EDIT_PROGRAMME,
  payload: programmeId,
});