import { call, select, takeLatest, put } from 'redux-saga/effects';
import moment from 'moment';
import ChildService from '../../../services/API/ChildService';
import { ACTIONS } from './constants';
import {
  loadProgrammesSuccess,
  loadProgrammesFail,
  saveNewChildError,
} from './actions';
import { IChildData } from '../../../models/IChild';
import { IProgramme, IProgrammeListResponse } from '../../../models/IProgramme';
import { SelectOption } from '../../../components/Select';
import ProgrammeService from '../../../services/API/ProgramService';
import { ERRORS } from '../../../constants/errors';

interface ChildType {
  surname: string,
  name: string,
  birthDate: string,
  diagnosis?: string,
  parentPhone?: string,
  info?: string,
  programme?: SelectOption,
}

export function* fetchProgrammes() {
  try {
    const { user: { userId }} = yield select(state => state.auth);
    const result : IProgrammeListResponse = yield call(ProgrammeService.getList, userId);
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

export function* saveNewChild() {
  try {
    const { user: { token }} = yield select(state => state.auth);
    const data: ChildType = yield select(state => state.newChildCard.form);
    const newDate = data.birthDate && moment(data.birthDate).format('YYYY-MM-DD');
    debugger;
    const params = {
      surname: data.surname,
      name: data.name,
      birthDate: newDate,
      diagnosis: data.diagnosis,
      parentPhone: data.parentPhone,
      info: data.info,
      programId: parseInt(data.programme?.value),
    };
    yield call(ChildService.create, token, params);
  }
  catch (error) {
    yield put(saveNewChildError(error));
  }
}

export default function* newChildSaga() {
  yield takeLatest([ACTIONS.LOAD_PROGRAMMES], fetchProgrammes);
  yield takeLatest([ACTIONS.SAVE_NEW_CHILD], saveNewChild);
}