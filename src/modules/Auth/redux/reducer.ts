import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";

export interface IAuthState {
  user: {
    userId: number | null,
    name: string | null,
    surname: string | null,
    email: string | null,
  },
  isAuth: boolean,
  isLoading: string,
  error?: string,
}

const initialState : IAuthState = {
  user: {
    userId: 1,
    name: 'Елена',
    surname: 'Хей',
    email: 'lena0012@gmail.com',
  },
  isAuth: true,
  isLoading: LOADING_STATUS.DONE,
};

const initialState1 : IAuthState = {
  user: {
    userId: null,
    name: null,
    surname: null,
    email: null,
  },
  isAuth: false,
  isLoading: LOADING_STATUS.IDLE,
};

const reducer = (
  state : IAuthState = initialState,
  action: IAction,
) : IAuthState => {
  switch(action.type) {
    case ACTIONS.LOAD_USER_DATA_SUCCESS:
      return ({
        ...state,
        user: {
          userId: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          email: action.payload.email,
        },
        isAuth: true,
      });
    case ACTIONS.LOAD_USER_DATA_FAIL:
      return ({
        ...state,
        isAuth: false,
        error: action.payload,
      });
    default:
      return state;
  }
}

export default reducer;