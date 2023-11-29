import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { productApi } from '@src/services/ProductsService';

const rootReducer = combineReducers({
  [productApi.reducerPath]: productApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware().concat(productApi.middleware);
    },
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof store>;
