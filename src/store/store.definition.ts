import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import { recipesStoreApi } from './apis';
import { counterReducer } from './slices';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [recipesStoreApi.reducerPath]: recipesStoreApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(recipesStoreApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
