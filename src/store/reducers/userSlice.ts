import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IUser } from '@src/services/models';

export interface userState {
  user: IUser | null;
  loggedIn: boolean;
}

const initialState: userState = {
  user: null,
  loggedIn: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      state.loggedIn = true;
    },
  },
});

export const { logout, setUser } = userSlice.actions;
export default userSlice.reducer;
