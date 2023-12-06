import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { proposedApi } from '@src/services/ProposedService';
import { dealerApi } from '@src/services/DealerService.ts';
import { recommendationsAPI } from '@src/services/RecommendationsService.ts';
import { statisticsApi } from '@src/services/StatisticsService';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  [proposedApi.reducerPath]: proposedApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  [recommendationsAPI.reducerPath]: recommendationsAPI.reducer,
  [statisticsApi.reducerPath]: statisticsApi.reducer,
  themeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      proposedApi.middleware,
      dealerApi.middleware,
      recommendationsAPI.middleware,
      statisticsApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];
