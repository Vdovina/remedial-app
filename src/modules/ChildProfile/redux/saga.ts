import { call, select, takeLatest, put } from 'redux-saga/effects';
import ChildService from '../../../services/API/ChildService';
import { ACTIONS } from './constants';
import {
  loadChildInfoSuccess,
  loadChildInfoFail,
} from './actions';
import { IChild, IChildResponse } from '../../../models/IChild';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';
import { ERRORS } from '../../../constants/errors';
import { IResponse } from '../../../models/IResponse';

export function* fetchChildInfo() {
  try {
    const { id } = yield select(state => state.childProfile.childInfo);
    const { user: { userId }} = yield select(({ auth }) => auth);
    if (id) {
      const result : IChildResponse = yield call(ChildService.getChild, userId, id);
      if (result.isSucceeded) {
        yield put(loadChildInfoSuccess(result.resultData));
      }
      else {
        throw ERRORS.LOAD_CHILDREN_ERROR;
      }
    }
    else {
      throw ERRORS.UNKNOWN_CHILD_INFO;
    }
  }
  catch (error) {
    yield put(loadChildInfoFail(error));
  }
}

export function* editChild() {
  try {
    const { form, childInfo} = yield select(({ childProfile }) => childProfile);
    const newChildData : IChild = {
      id: childInfo.id,
      surname: form.surname,
      name: form.name,
      birthDate: form.birthDate,
      diagnosis: form.diagnosis,
      parentPhone: form.parentPhone,
      info: form.info,
      programId: null,
    };
    yield call(ChildService.editChild, newChildData);
  }
  catch (error) {
    console.error(error);
  }
}

export function* deleteChild() {
  try {
    const { id } = yield select(state => state.childProfile.childInfo);
    const result : IResponse = yield call(ChildService.deleteChild, id);
    if (!result.isSucceeded) {
      throw ERRORS.DELETE_CHILD_ERROR;
    }
  }
  catch (error) {
    console.error(error);
  }
}

export default function* childProfileSaga() {
  yield takeLatest([ACTIONS.LOAD_CHILD_INFO], fetchChildInfo);
  yield takeLatest([ACTIONS.SAVE_CHILD], editChild);
  yield takeLatest([ACTIONS.DELETE_CHILD], deleteChild);
}
