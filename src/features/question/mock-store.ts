// Mock store setup
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
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
const mockStoreCreator: MockStoreCreator<QuestionState, DispatchExts> =
  createMockStore<QuestionState, DispatchExts>([baseApi, thunk]);
const mockStore: MockStoreEnhanced<QuestionState, DispatchExts> =
  mockStoreCreator(initialState);

export default mockStore;
