import { IGame } from "../../../models/IGame";
import { ACTIONS } from "./constants";

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