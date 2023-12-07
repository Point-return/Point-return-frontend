import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { proposedApi } from '@src/services/ProposedService';
import { dealerApi } from '@src/services/DealerService.ts';
import { recommendationsAPI } from '@src/services/RecommendationsService.ts';
import { statisticsApi } from '@src/services/StatisticsService';
import { authApi } from '@src/services/AuthService';
import { userApi } from '@src/services/UserService';
import { productApi } from '@src/services/ManufacturerService.ts';
import themeReducer from './reducers/themeSlice';
import userReducer from './reducers/userSlice';
import dealerReducer from './reducers/dealerSlice';
import pageReducer from './reducers/pageSlice';

const rootReducer = combineReducers({
  [proposedApi.reducerPath]: proposedApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  [recommendationsAPI.reducerPath]: recommendationsAPI.reducer,
  [statisticsApi.reducerPath]: statisticsApi.reducer,
  [productApi.reducerPath]: productApi.reducer,
  [authApi.reducerPath]: authApi.reducer,
  [userApi.reducerPath]: userApi.reducer,
  dealerReducer,
  themeReducer,
  userReducer,
  pageReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      proposedApi.middleware,
      dealerApi.middleware,
      recommendationsAPI.middleware,
      statisticsApi.middleware,
      productApi.middleware,
      authApi.middleware,
      userApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
