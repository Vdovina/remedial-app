import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";

const initialState = {
  form: {
    name: '',
    surname: '',
    birthDate: '',
    parentPhone: '',
    diagnosis: '',
    info: '',
    programme: null,
  },
  options: {
    programmes: [],
  }
};

const reducer = (
  state = initialState,
  action: IAction,
) => {
  switch(action.type) {
    case ACTIONS.SET_NAME:
      return {
        ...state,
        form: {
          ...state.form,
          name: action.payload,
        }
      };
    case ACTIONS.SET_SURNAME:
      return {
        ...state,
        form: {
          ...state.form,
          surname: action.payload,
        }
      };
    case ACTIONS.SET_BIRTHDATE:
      return {
        ...state,
        form: {
          ...state.form,
          birthDate: action.payload,
        }
      };
    case ACTIONS.SET_PARENTPHONE:
      return {
        ...state,
        form: {
          ...state.form,
          parentPhone: action.payload,
        }
      };
    case ACTIONS.SET_DIAGNOSIS:
      return {
        ...state,
        form: {
          ...state.form,
          diagnosis: action.payload,
        }
      };
    case ACTIONS.SET_INFO:
      return {
        ...state,
        form: {
          ...state.form,
          info: action.payload,
        }
      };
    case ACTIONS.SET_PROGRAMME:
      return {
        ...state,
        form: {
          ...state.form,
          programme: action.payload,
        }
      };
    case ACTIONS.CLEAR_FORM:
      return {
        ...state,
        form: initialState.form,
      };

    case ACTIONS.LOAD_PROGRAMMES_SUCCESS:
      return {
        ...state,
        options: {
          ...state.options,
          programmes: action.payload,
        }
      };
    default:
      return state;
  }
}

export default reducer;