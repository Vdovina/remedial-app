import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { SelectOption } from "../../../components/Select";

interface IStatisticsState {
  statistics: StatisticsType[] | null,
  isLoading: string,
  options: {
    children: SelectOption[],
    games: SelectOption[],
  },
  filter: {
    children: SelectOption[],
    games?: SelectOption,
    since: string,
    till: string,
  }
}

export type StatisticsType = {
  date: string,
  avgMistakesCount: number,
  mistakesByChildren: {
    id: number,
    name: string,
    avgMistakesCount: number,
  }[],
  avgTiming: number,
  avgTimingByChildren: {
    id: number,
    name: string,
    avgTiming: number,
  }[],
}

const initialState : IStatisticsState = {
  statistics: null,
  isLoading: LOADING_STATUS.IDLE,
  options: {
    children: [],
    games: [],
  },
  filter: {
    children: [],
    games: undefined,
    since: '',
    till: '',
  }
};

const reducer = (
  state : IStatisticsState = initialState,
  action: IAction,
) : IStatisticsState => {
  switch(action.type) {
    case ACTIONS.LOAD_STATISTICS:
      return ({
        ...state,
        isLoading: LOADING_STATUS.LOADING,
      });
    case ACTIONS.LOAD_STATISTICS_SUCCESS:
      return ({
        ...state,
        statistics: action.payload,
        isLoading: LOADING_STATUS.DONE,
      });
    case ACTIONS.LOAD_STATISTICS_FAIL:
      return ({
        ...state,
        isLoading: LOADING_STATUS.ERROR,
      });

    case ACTIONS.LOAD_CHILDREN_SUCCESS:
      return ({
        ...state,
        options: {
          ...state.options,
          children: action.payload,
        },
      });
    case ACTIONS.LOAD_GAMES_SUCCESS:
      return ({
        ...state,
        options: {
          ...state.options,
          games: action.payload,
        },
      });

    case ACTIONS.SET_CHILDREN:
      return ({
        ...state,
        filter: {
          ...state.filter,
          children: action.payload,
        },
      });
    case ACTIONS.SET_GAMES:
      return ({
        ...state,
        filter: {
          ...state.filter,
          games: action.payload,
        },
      });
    case ACTIONS.SET_SINCE_DATE:
      return ({
        ...state,
        filter: {
          ...state.filter,
          since: action.payload,
        },
      });
    case ACTIONS.SET_TILL_DATE:
      return ({
        ...state,
        filter: {
          ...state.filter,
          till: action.payload,
        },
      });
    default:
      return state;
  }
}

export default reducer;