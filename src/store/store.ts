import { createStore } from '@reduxjs/toolkit';
import rootReducer from './root.reducer';
import reactotron from '../config/reactotron';

const middleware = reactotron.createEnhancer!();

const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
