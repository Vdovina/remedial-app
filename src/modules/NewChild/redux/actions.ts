import { ACTIONS } from "./constants";
import { SelectOption } from "../../../components/Select";

export const setName = (value: string) => ({
  type: ACTIONS.SET_NAME,
  payload: value,
});

export const setSurname = (value: string) => ({
  type: ACTIONS.SET_SURNAME,
  payload: value,
});

export const setBirthDate = (value: string) => ({
  type: ACTIONS.SET_BIRTHDATE,
  payload: value,
});

export const setParentPhone = (value: string) => ({
  type: ACTIONS.SET_PARENTPHONE,
  payload: value,
});

export const setDiagnosis = (value: string) => ({
  type: ACTIONS.SET_DIAGNOSIS,
  payload: value,
});

export const setInfo = (value: string) => ({
  type: ACTIONS.SET_INFO,
  payload: value,
});

export const setProgramme = (value: SelectOption) => ({
  type: ACTIONS.SET_PROGRAMME,
  payload: value,
});


export const loadProgrammes = () => ({
  type: ACTIONS.LOAD_PROGRAMMES,
});

export const loadProgrammesSuccess = (value: any[]) => ({
  type: ACTIONS.LOAD_PROGRAMMES_SUCCESS,
  payload: value,
});

export const loadProgrammesFail = (error: any) => ({
  type: ACTIONS.LOAD_PROGRAMMES_FAIL,
  payload: error,
});


export const saveNewChild = () => ({
  type: ACTIONS.SAVE_NEW_CHILD,
});

export const saveNewChildError = (error: any) => ({
  type: ACTIONS.SAVE_NEW_CHILD_ERROR,
  payload: error,
});