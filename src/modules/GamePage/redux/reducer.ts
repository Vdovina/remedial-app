import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IGame } from "../../../models/IGame";

const initialState = {
  currentGame: null,
  children: [],
};

const reducer = (
  state = initialState,
  action: IAction,
) => {
  switch(action.type) {
    case ACTIONS.LOAD_CHILDREN_SUCCESS:
      return ({
        ...state,
        children: action.payload,
      });
    case ACTIONS.SET_CURRENT_GAME:
      return ({
        ...state,
        currentGame: action.payload,
      });
    default:
      return state;
  }
}

export default reducer;