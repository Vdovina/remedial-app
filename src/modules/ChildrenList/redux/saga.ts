import { call, select, takeLatest, put } from 'redux-saga/effects';
import ChildService from '../../../services/API/ChildService';
import { ACTIONS } from './constants';
import {
  loadChildrenSuccess,
  loadChildrenFail,
} from './actions';
import { IChildListResponse } from '../../../models/IChild';
import { IAction } from '../../../models/IAction';

export function* fetchChildren() {
  try {
    const { user: { token }} = yield select(({ auth }) => auth);
    const { currentPage, pageEntities } = yield select(({ childrenList }) => childrenList);
    const result : IChildListResponse = yield call(
      ChildService.getChildren,
      token,
      currentPage,
      pageEntities
    );

    const children = result.isSucceeded ? result.resultData.map(child => ({
      id: child.id,
      name: `${child.surname} ${child.name}`,
      age: 5,
      diagnosis: child.diagnosis,
      parentPhone: child.parentPhone,
      info: child.info,
      programId: child.programId,
    })) : [];

    yield put(loadChildrenSuccess(children));
  }
  catch (error) {
    yield put(loadChildrenFail(error));
  }
}

export default function* childrenListSaga() {
  yield takeLatest([ACTIONS.LOAD_CHILDREN], fetchChildren);
}
