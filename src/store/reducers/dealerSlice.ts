import { createSlice, PayloadAction } from '@reduxjs/toolkit';

/* export interface dealerState {
  dealerId: number;
  activeId: number;
} */

const initialState: any = {
  dealerId: localStorage.getItem('dealerId')
    ? JSON.parse(localStorage.getItem('dealerId')!)
    : 1,
  activeId: localStorage.getItem('activeId')
    ? JSON.parse(localStorage.getItem('activeId')!)
    : 0,
  pageNumber: localStorage.getItem('pageNumber')
    ? JSON.parse(localStorage.getItem('pageNumber')!)
    : 1,
};

export const dealerSlice = createSlice({
  name: 'dealer',
  initialState,
  reducers: {
    setDealerId: (state, action: PayloadAction<number>) => {
      state.dealerId = action.payload;
      state.pageNumber = action.payload;
      localStorage.setItem('dealerId', JSON.stringify(state.dealerId));
      localStorage.setItem('pageNumber', JSON.stringify(state.pageNumber));
    },
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
      localStorage.setItem('activeId', JSON.stringify(state.activeId));
    },
  },
});

export const { setDealerId, setActiveId } = dealerSlice.actions;
export default dealerSlice.reducer;
