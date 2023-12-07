import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface pageState {
  pageNumber: number;
}

const initialState: pageState = {
  pageNumber: 1,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
    },
  },
});

export const { setPage } = pageSlice.actions;
export default pageSlice.reducer;
