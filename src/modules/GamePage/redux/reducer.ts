import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IGame } from "../../../models/IGame";
import { SelectOption } from "../../../components/Select";

interface IGamePageState {
  currentGame: any,
  currentProgramme: any[] | null,
  currentGameOrder: number | null,
  children: SelectOption[], 
}

const initialState : IGamePageState = {
  currentGame: null,
  currentProgramme: null,
  currentGameOrder: null,
  children: [],
};

const reducer = (
  state: IGamePageState = initialState,
  action: IAction,
) : IGamePageState => {
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
    case ACTIONS.SET_CUURENT_GAME_ORDER:
      return ({
        ...state,
        currentGameOrder: (
            state.currentGameOrder !== null
            && state.currentProgramme
            && state.currentProgramme.length > state.currentGameOrder + 1
          )
          ? state.currentGameOrder + 1
          : null,
      });
    case ACTIONS.LOAD_CURRENT_PROGRAMME_SUCCESS:
      return ({
        ...state,
        currentProgramme: action.payload,
        currentGameOrder: 0,
      });
    default:
      return state;
  }
}

export default reducer;