import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { proposedApi } from '@src/services/ProposedService';
import { dealerApi } from '@src/services/DealerService.ts';
import themeReducer from './reducers/themeSlice';
import userReducer from './reducers/userSlice';
import { authApi } from '@src/services/AuthService';
import { userApi } from '@src/services/UserService';

const rootReducer = combineReducers({
  [proposedApi.reducerPath]: proposedApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  themeReducer,
  userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      proposedApi.middleware,
      dealerApi.middleware,
      authApi.middleware,
      userApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
