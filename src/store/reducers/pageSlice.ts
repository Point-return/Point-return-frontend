import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* export interface dealerState {
  dealerId: number;
  activeId: number;
} */

const initialState = {
  pageNumber: localStorage.getItem('pageNumber')
    ? JSON.parse(localStorage.getItem('pageNumber')!)
    : 1,
  pageSizeNumber: localStorage.getItem('pageSizeNumber')
    ? JSON.parse(localStorage.getItem('pageSizeNumber')!)
    : 10,
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.pageNumber = action.payload;
      localStorage.setItem('pageNumber', JSON.stringify(state.pageNumber));
    },
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSizeNumber = action.payload;
      localStorage.setItem(
        'pageSizeNumber',
        JSON.stringify(state.pageSizeNumber),
      );
    },
  },
});

export const { setPage, setPageSize } = pageSlice.actions;
export default pageSlice.reducer;
