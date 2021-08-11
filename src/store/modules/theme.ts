import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';

interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: state => {
      state.value = 'light';
    },
    setDark: state => {
      state.value = 'dark';
    },
    toggle: state => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { setLight, setDark, toggle } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.value;

export default themeSlice.reducer;
