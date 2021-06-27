import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import {
  addQuestionAsync,
  loadQuestionAsync,
  loadQuestionsAsync,
  voteChoiceAsync,
} from 'src/features/question/question-api';
import {
  addQuestion,
  endLoading,
  loadQuestion,
  loadQuestions,
  voteChoice,
} from 'src/features/question/question-slice';
import store from 'src/features/question/mock-store';

describe('Question API', () => {
  let axiosMock: MockAdapter;
  const mockErrorMessage = 'Request failed with status code 500';
  const url = '/dummyUrl';

  beforeEach(() => {
    axiosMock = new MockAdapter(axios);

    store.clearActions();
  });

  describe('loadQuestionsAsync', () => {
    it('should dispatch loadQuestions action', async () => {
      axiosMock.onGet('/questions').reply(200, []);

      await store.dispatch(loadQuestionsAsync());

      expect(store.getActions()).toContainEqual({
        type: loadQuestions.type,
        payload: [],
      });
    });

    it('should dispatch endLoading action on error', async () => {
      axiosMock.onGet('/questions').reply(500);

      await store.dispatch(loadQuestionsAsync());

      expect(store.getActions()).toContainEqual({
        type: endLoading.type,
        payload: mockErrorMessage,
      });
    });
  });

  describe('loadQuestionAsync', () => {
    it('should dispatch loadQuestion action', async () => {
      axiosMock.onGet(url).reply(200, []);

      await store.dispatch(loadQuestionAsync(url));

      expect(store.getActions()).toContainEqual({
        type: loadQuestion.type,
        payload: [],
      });
    });

    it('should dispatch endLoading action on error', async () => {
      axiosMock.onGet(url).reply(500);

      await store.dispatch(loadQuestionAsync(url));

      expect(store.getActions()).toContainEqual({
        type: endLoading.type,
        payload: mockErrorMessage,
      });
    });
  });

  describe('addQuestionAsync', () => {
    it('should dispatch addQuestion action', async () => {
      axiosMock.onPost('/questions').reply(200, []);

      await store.dispatch(addQuestionAsync({ question: '', choices: [] }));

      expect(store.getActions()).toContainEqual({
        type: addQuestion.type,
        payload: [],
      });
    });

    it('should dispatch endLoading action on error', async () => {
      axiosMock.onPost('/questions').reply(500);

      await store.dispatch(addQuestionAsync({ question: '', choices: [] }));

      expect(store.getActions()).toContainEqual({
        type: endLoading.type,
        payload: mockErrorMessage,
      });
    });
  });

  describe('voteChoiceAsync', () => {
    it('should dispatch voteChoice action', async () => {
      axiosMock.onPost(url).reply(200, []);

      await store.dispatch(voteChoiceAsync(url));

      expect(store.getActions()).toContainEqual({
        type: voteChoice.type,
        payload: [],
      });
    });

    it('should dispatch endLoading action on error', async () => {
      axiosMock.onPost(url).reply(500);

      await store.dispatch(voteChoiceAsync(url));

      expect(store.getActions()).toContainEqual({
        type: endLoading.type,
        payload: mockErrorMessage,
      });
    });
  });
});
