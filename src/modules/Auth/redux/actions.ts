import { IUser } from "../../../models/IUser";
import { ACTIONS } from "./constants";

export const loadUserData = (email: string, password: string) => ({
  type: ACTIONS.LOAD_USER_DATA,
  payload: {
    email,
    password,
  },
});

export const loadUserDataSuccess = (data: IUser) => ({
  type: ACTIONS.LOAD_USER_DATA_SUCCESS,
  payload: data,
});

export const loadUserDataFail = (error: any) => ({
  type: ACTIONS.LOAD_USER_DATA_FAIL,
  payload: error,
});