import { call, select, takeLatest, put } from 'redux-saga/effects';
import ChildService from '../../../services/API/ChildService';
import { ACTIONS } from './constants';
import {
  loadChildInfoSuccess,
  loadChildInfoFail,
  loadProgrammesSuccess,
  loadProgrammesFail,
} from './actions';
import { IChild, IChildResponse } from '../../../models/IChild';
import { ERRORS } from '../../../constants/errors';
import { IResponse } from '../../../models/IResponse';
import { IProgrammeListResponse } from '../../../models/IProgramme';
import ProgrammeService from '../../../services/API/ProgramService';

export function* fetchChildInfo() {
  try {
    const { id } = yield select(state => state.childProfile.childInfo);
    const { user: { token }} = yield select(({ auth }) => auth);
    if (id) {
      const result : IChildResponse = yield call(ChildService.get, token, id);
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

export function* fetchProgrammes() {
  try {
    const { user: { token }} = yield select(state => state.auth);
    const result : IProgrammeListResponse = yield call(ProgrammeService.getList, token);
    if (!result.isSucceeded) {
      throw ERRORS.LOAD_PROGRAMMES_ERROR;
    }
    const processedProgrammes = result.resultData?.map(
      programme => ({
        value: programme.id,
        label: programme.name,
      })
    );
    yield put(loadProgrammesSuccess(processedProgrammes))
  }
  catch (error) {
    loadProgrammesFail(error);
  }
}

export function* editChild() {
  try {
    const { user: { token }} = yield select(state => state.auth);
    const { form, childInfo} = yield select(({ childProfile }) => childProfile);
    const newChildData : IChild = {
      id: childInfo.id,
      surname: form.surname,
      name: form.name,
      birthDate: form.birthDate,
      diagnosis: form.diagnosis,
      parentPhone: form.parentPhone,
      info: form.info,
      programId: form.programme.value,
    };
    yield call(ChildService.edit, token, newChildData);
  }
  catch (error) {
    console.error(error);
  }
}

export function* deleteChild() {
  try {
    const { id } = yield select(state => state.childProfile.childInfo);
    const result : IResponse = yield call(ChildService.delete, id);
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
  yield takeLatest([ACTIONS.LOAD_PROGRAMMES], fetchProgrammes);
  yield takeLatest([ACTIONS.SAVE_CHILD], editChild);
  yield takeLatest([ACTIONS.DELETE_CHILD], deleteChild);
}
