import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import questionReducer from 'src/features/question/question-slice';
import baseApi from 'src/middleware/base-api';

export const store = configureStore({
  reducer: {
    question: questionReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
