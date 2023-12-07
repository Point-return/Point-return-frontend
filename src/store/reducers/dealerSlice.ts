import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface dealerState {
  dealerId: number;
  activeId: number;
}

const initialState: dealerState = {
  dealerId: localStorage.getItem('dealerId')
    ? JSON.parse(localStorage.getItem('dealerId')!)
    : 1,
  activeId: localStorage.getItem('activeId')
    ? JSON.parse(localStorage.getItem('activeId')!)
    : 0,
};

export const dealerSlice = createSlice({
  name: 'dealer',
  initialState,
  reducers: {
    setDealerId: (state, action: PayloadAction<number>) => {
      state.dealerId = action.payload;
      localStorage.setItem('dealerId', JSON.stringify(state.dealerId));
    },
    setActiveId: (state, action: PayloadAction<number>) => {
      state.activeId = action.payload;
      localStorage.setItem('activeId', JSON.stringify(state.activeId));
    },
  },
});

export const { setDealerId, setActiveId } = dealerSlice.actions;
export default dealerSlice.reducer;
