import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga';
import {persistStore, persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import reducer from "./reducer";
import { default as appSaga } from './sagas';

const persistConfig = {
  key: 'remedial-app-global-redux',
  storage: storageSession,
  whitelist: ['form'],
  StatereConciler: autoMergeLevel2 // Посмотреть конкретную ситуацию «процесса слияния»
};

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(appSaga);

export type IDispatch = typeof store.dispatch;
export type IState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
export default store;
