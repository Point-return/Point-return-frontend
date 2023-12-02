import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from '@src/services/ProductsService';
import { dealerApi } from '@src/services/DealerService.ts';
import themeReducer from './reducers/themeSlice';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
  [dealerApi.reducerPath]: dealerApi.reducer,
  themeReducer,
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
export type AppDispatch = AppStore['dispatch'];
