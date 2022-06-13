import { SelectOption } from "../../../components/Select";
import { IChildName } from "../../../models/IChild";
import { ACTIONS } from "./constants";

export const loadStatistics = () => ({
  type: ACTIONS.LOAD_STATISTICS,
});

export const loadStatisticsSuccess = (value: any) => ({
  type: ACTIONS.LOAD_STATISTICS_SUCCESS,
  payload: value,
});

export const loadStatisticsFail = (error: any) => ({
  type: ACTIONS.LOAD_STATISTICS_FAIL,
  payload: error,
});


export const loadChildren = () => ({
  type: ACTIONS.LOAD_CHILDREN,
});

export const loadChildrenSuccess = (children: SelectOption[]) => ({
  type: ACTIONS.LOAD_CHILDREN_SUCCESS,
  payload: children,
});

export const loadChildrenFail = (error: any) => ({
  type: ACTIONS.LOAD_CHILDREN_FAIL,
  payload: error,
});


export const loadGames = () => ({
  type: ACTIONS.LOAD_GAMES,
});

export const loadGamesSuccess = (children: any[]) => ({
  type: ACTIONS.LOAD_GAMES_SUCCESS,
  payload: children,
});

export const loadGamesFail = (error: any) => ({
  type: ACTIONS.LOAD_GAMES_FAIL,
  payload: error,
});


export const setChildren = (children: SelectOption[]) => ({
  type: ACTIONS.SET_CHILDREN,
  payload: children,
});

export const setGames = (games: SelectOption) => ({
  type: ACTIONS.SET_GAMES,
  payload: games,
});

export const setSinceDate = (date: string) => ({
  type: ACTIONS.SET_SINCE_DATE,
  payload: date,
});

export const setTillDate = (date: string) => ({
  type: ACTIONS.SET_TILL_DATE,
  payload: date,
});