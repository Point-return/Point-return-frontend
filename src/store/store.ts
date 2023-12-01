import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from '@src/services/ProductsService';
import { dealerApi } from '@src/services/DealerService.ts';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(
      productApi.middleware,
      dealerApi.middleware,
    );
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = typeof store;
