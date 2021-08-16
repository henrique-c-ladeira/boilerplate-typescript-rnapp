import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';
import rootSaga from './root.saga';
import reactotron from '../config/reactotron';
import createSagaMiddleware from '@redux-saga/core';

const sagaMonitor = reactotron.createSagaMonitor!();

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  reactotron?.createEnhancer!(),
);

const store = createStore(rootReducer, middlewares);
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
