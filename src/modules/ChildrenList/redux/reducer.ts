import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IChildTableData } from "../../../models/IChild";

interface childrenListState {
  children: IChildTableData[],
  isLoading: string,
  currentPage: number,
  pageEntities: number,
}

const initialState: childrenListState = {
  children: [],
  isLoading: LOADING_STATUS.IDLE,
  currentPage: 1,
  pageEntities: 20,
};

const reducer = (
  state: childrenListState = initialState,
  action: IAction,
) : childrenListState => {
  switch(action.type) {
    case ACTIONS.LOAD_CHILDREN:
      return {
        ...state,
        isLoading: LOADING_STATUS.LOADING,
      };
    case ACTIONS.LOAD_CHILDREN_SUCCESS:
      return {
        ...state,
        children: action.payload,
        isLoading: action.payload?.length === 0 ? LOADING_STATUS.EMPTY : LOADING_STATUS.DONE,
      }
    case ACTIONS.LOAD_CHILDREN_FAIL:
      return {
        ...state,
        isLoading: LOADING_STATUS.ERROR,
      }

    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      }
    case ACTIONS.SET_PAGE_ENTITIES:
      return {
        ...state,
        pageEntities: action.payload,
      }
    default:
      return state;
  }
}

export default reducer;