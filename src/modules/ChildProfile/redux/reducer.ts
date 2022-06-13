import { IAction } from "../../../models/IAction";
import { ACTIONS } from "./constants";
import { LOADING_STATUS } from "../../../constants/loadingStatuses";
import { IChild, IChildData } from "../../../models/IChild";
import { IProgrammeName } from "../../../models/IProgramme";
import { SelectOption } from "../../../components/Select";

interface childProfileState {
  childInfo: {
    id: number | undefined,
    name: string,
    surname: string,
    birthDate: string,
    parentPhone: string,
    diagnosis: string,
    info: string,
    programme: number | undefined,
  },
  form: {
    name: string,
    surname: string,
    birthDate: string,
    parentPhone: string,
    diagnosis: string,
    info: string,
    programme: SelectOption | undefined,
  },
  options: {
    programmes: SelectOption[],
  },
  isLoading: string,
}

const initialState : childProfileState = {
  childInfo: {
    id: undefined,
    name: '',
    surname: '',
    birthDate: '',
    parentPhone: '',
    diagnosis: '',
    info: '',
    programme: undefined,
  },
  form: {
    name: '',
    surname: '',
    birthDate: '',
    parentPhone: '',
    diagnosis: '',
    info: '',
    programme: undefined,
  },
  options: {
    programmes: [],
  },
  isLoading: LOADING_STATUS.IDLE,
};

const reducer = (
  state : childProfileState = initialState,
  action: IAction,
) : childProfileState => {
  switch(action.type) {
    case ACTIONS.LOAD_CHILD_INFO:
      return ({
        ...state,
        childInfo: {
          ...state.childInfo,
          id: action.payload,
        },
        isLoading: LOADING_STATUS.LOADING,
      });
    case ACTIONS.LOAD_CHILD_INFO_SUCCESS:
      return ({
        ...state,
        childInfo: {
          id: action.payload.id,
          name: action.payload.name,
          surname: action.payload.surname,
          birthDate: action.payload.birthDate,
          parentPhone: action.payload.parentPhone,
          diagnosis: action.payload.diagnosis,
          info: action.payload.info,
          programme: action.payload.programme,
        },
        form: {
          name: action.payload.name,
          surname: action.payload.surname,
          birthDate: action.payload.birthDate,
          parentPhone: action.payload.parentPhone,
          diagnosis: action.payload.diagnosis,
          info: action.payload.info,
          programme: action.payload.programme,
        },
        isLoading: LOADING_STATUS.DONE,
      });
    case ACTIONS.LOAD_CHILD_INFO_FAIL:
      return ({
        ...state,
        isLoading: LOADING_STATUS.ERROR,
      });
    
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

    case ACTIONS.LOAD_PROGRAMMES_SUCCESS:
      return {
        ...state,
        options: {
          ...state.options,
          programmes: action.payload,
        }
      };
    case ACTIONS.CLEAR_FORM:
      return initialState;
    default:
      return state;
  }
}

export default reducer;