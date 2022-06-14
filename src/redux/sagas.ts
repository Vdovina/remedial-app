import { all, call } from 'redux-saga/effects';

import { default as newChildSaga } from "../modules/NewChild/redux/saga";
import { default as childrenListSaga } from '../modules/ChildrenList/redux/saga';
import { default as childProfileSaga } from '../modules/ChildProfile/redux/saga';
import { default as gameListSaga } from '../modules/GameList/redux/saga';
import { default as programmesSaga } from '../modules/Programmes/redux/saga';
import { default as statisticsSaga } from '../modules/Statistics/redux/saga';
import { default as authSaga } from '../modules/Auth/redux/saga';
import { default as gamePageSaga } from '../modules/GamePage/redux/saga';

export default function* () {
  yield all([
    call(newChildSaga),
    call(childrenListSaga),
    call(childProfileSaga),
    call(gameListSaga),
    call(programmesSaga),
    call(statisticsSaga),
    call(authSaga),
    call(gamePageSaga),
  ]);
}