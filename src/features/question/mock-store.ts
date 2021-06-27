// Mock store setup
import {
  AnyAction,
  getDefaultMiddleware,
  Middleware,
  ThunkDispatch,
} from '@reduxjs/toolkit';
import { RootState } from 'src/app/store';
import baseApi from 'src/middleware/base-api';
import createMockStore, {
  MockStoreCreator,
  MockStoreEnhanced,
} from 'redux-mock-store';
import { QuestionState } from 'src/features/question/question-slice';

const initialState: QuestionState = {
  list: [],
  currentQuestion: { choices: [], question: '', url: '', published_at: '' },
  status: 'idle',
};

type DispatchExts = ThunkDispatch<RootState, undefined, AnyAction>;
const middlewares: Array<Middleware> = getDefaultMiddleware().concat(baseApi);
const mockStoreCreator: MockStoreCreator<QuestionState, DispatchExts> =
  createMockStore<QuestionState, DispatchExts>(middlewares);
const mockStore: MockStoreEnhanced<QuestionState, DispatchExts> =
  mockStoreCreator(initialState);

export default mockStore;
