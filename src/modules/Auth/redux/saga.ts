import { call, select, takeLatest, put } from 'redux-saga/effects';
import { ACTIONS } from './constants';
import {
  loadUserDataSuccess,
  loadUserDataFail,
} from './actions';
import { IUserResponse } from '../../../models/IUser';
import { AuthService } from '../../../services/API/AuthService';

export function* fetchUser(props: any) {
  try {
    const { payload: { email, password }} = props;
    const result: IUserResponse = yield call(AuthService.authorize, { email, password });
    debugger;
    
    if (result.isSucceeded) {
      const user = {
        token: result.resultData.token,
        name: result.resultData.userName,
        surname: result.resultData.surname,
        email: result.resultData.email,
        profession: result.resultData.profession,
      }
      yield put(loadUserDataSuccess(user));
    }
    else {
      throw result.error;
    }
  }
  catch (error) {
    console.error(error);
    yield put(loadUserDataFail(error));
  }
}

export default function* auth() {
  yield takeLatest([ACTIONS.LOAD_USER_DATA], fetchUser);
}