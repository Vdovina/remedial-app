import { ACTIONS } from "./constants";
import { IChild, IChildTableData } from "../../../models/IChild";

export const loadChildren = () => ({
  type: ACTIONS.LOAD_CHILDREN,
});

export const loadChildrenSuccess = (values: IChildTableData[]) => ({
  type: ACTIONS.LOAD_CHILDREN_SUCCESS,
  payload: values,
});

export const loadChildrenFail = (error: any) => ({
  type: ACTIONS.LOAD_CHILDREN_FAIL,
  payload: error,
});

export const setCurrentPage = (page: number) => ({
  type: ACTIONS.SET_CURRENT_PAGE,
  payload: page,
});

export const setPageEntities = (value: number) => ({
  type: ACTIONS.SET_PAGE_ENTITIES,
  payload: value,
});
