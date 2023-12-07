import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface pageSizeState {
  pageSizeNumber: number;
}

const initialState: pageSizeState = {
  pageSizeNumber: 10,
};

export const pageSizeSlice = createSlice({
  name: 'pageSize',
  initialState,
  reducers: {
    setPageSize: (state, action: PayloadAction<number>) => {
      state.pageSizeNumber = action.payload;
    },
  },
});

export const { setPageSize } = pageSizeSlice.actions;
export default pageSizeSlice.reducer;
