import { combineReducers } from '@reduxjs/toolkit';
import themeReducer from './modules/theme';

const rootReducer = combineReducers({
  theme: themeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
