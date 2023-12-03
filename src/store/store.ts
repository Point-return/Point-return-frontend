import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { proposedApi } from '@src/services/ProposedService';
import { dealerApi } from '@src/services/DealerService.ts';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  [proposedApi.reducerPath]: proposedApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      proposedApi.middleware,
      dealerApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
