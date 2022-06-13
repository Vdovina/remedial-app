import { SelectOption } from "../../../components/Select";
import { IChild } from "../../../models/IChild";
import { ACTIONS } from "./constants";

export const loadChildInfo = (id: number) => ({
  type: ACTIONS.LOAD_CHILD_INFO,
  payload: id,
});

export const loadChildInfoSuccess = (value: IChild) => ({
  type: ACTIONS.LOAD_CHILD_INFO_SUCCESS,
  payload: value,
});

export const loadChildInfoFail = (error: any) => ({
  type: ACTIONS.LOAD_CHILD_INFO_FAIL,
  payload: error,
});

export const saveChild = () => ({
  type: ACTIONS.SAVE_CHILD,
});

export const saveChildError = (error: any) => ({
  type: ACTIONS.SAVE_CHILD_ERROR,
  payload: error,
});

export const deleteChild = () => ({
  type: ACTIONS.DELETE_CHILD,
});


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

export const loadProgrammesSuccess = (value: SelectOption[]) => ({
  type: ACTIONS.LOAD_PROGRAMMES_SUCCESS,
  payload: value,
});

export const loadProgrammesFail = (error: string) => ({
  type: ACTIONS.LOAD_PROGRAMMES_FAIL,
  payload: error,
});

export const clearForm = () => ({
  type: ACTIONS.CLEAR_FORM,
});