import { createSlice } from '@reduxjs/toolkit';

export interface themeState {
  theme: boolean;
}

const initialState: themeState = {
  theme: localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme')!)
    : false,
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = !state.theme;
      localStorage.setItem('theme', JSON.stringify(state.theme));
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
