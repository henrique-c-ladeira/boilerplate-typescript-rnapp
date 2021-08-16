import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { put, takeEvery } from '@redux-saga/core/effects';

const initialState = 'light';

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: () => 'light',
    setDark: () => 'dark',
    toggle: state => (state === 'light' ? 'dark' : 'light'),
  },
});

export const toggleAsync = () => ({
  type: 'theme/toggleAsync',
});

export const { setLight, setDark, toggle } = themeSlice.actions;

export function* themeSaga() {
  try {
    const theme: string | null = yield AsyncStorage.getItem('@theme');
    yield AsyncStorage.setItem('@theme', theme === 'light' ? 'dark' : 'light');
    yield put(toggle());
  } catch (err) {}
}

export function* watchThemeSaga() {
  yield takeEvery(toggleAsync().type, themeSaga);
}

export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
