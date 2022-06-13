import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IGame } from "../../../models/IGame";

const initialState = {
  games: [] as IGame[],
  isLoading: LOADING_STATUS.IDLE,
};

const reducer = (
  state = initialState,
  action: IAction,
) => {
  switch(action.type) {
    case ACTIONS.LOAD_GAMES:
      return {
        ...state,
        isLoading: LOADING_STATUS.LOADING,
      };
    case ACTIONS.LOAD_GAMES_SUCCESS:
      return {
        ...state,
        games: action.payload as IGame[],
        isLoading: action.payload?.length === 0 ? LOADING_STATUS.EMPTY : LOADING_STATUS.DONE,
      }
    case ACTIONS.LOAD_GAMES_FAIL:
      return {
        ...state,
        isLoading: LOADING_STATUS.ERROR,
      }
    default:
      return state;
  }
}

export default reducer;