import questionReducer, {
  addQuestion,
  ChoiceDto,
  endLoading,
  loadQuestion,
  loadQuestions,
  QuestionDto,
  startLoading,
  voteChoice,
} from 'src/features/question/question-slice';
import { configureStore, EnhancedStore } from '@reduxjs/toolkit';

describe('Question Slice', () => {
  let store: EnhancedStore;
  beforeEach(() => {
    store = configureStore({
      reducer: { question: questionReducer },
    });
  });

  describe('startLoading', () => {
    it('should set status to loading', () => {
      store.dispatch(startLoading());
      expect(store.getState().question.status).toEqual('loading');
    });
  });

  describe('endLoading', () => {
    it('should set status to idle', () => {
      store.dispatch(startLoading());
      expect(store.getState().question.status).toEqual('loading');

      store.dispatch(endLoading());
      expect(store.getState().question.status).toEqual('idle');
    });
  });

  describe('loadQuestions', () => {
    it('should update the question list', () => {
      const expected: QuestionDto[] = [
        { question: '', url: '', choices: [], published_at: '' },
        { question: '', url: '', choices: [], published_at: '' },
      ];
      store.dispatch(loadQuestions(expected));

      expect(store.getState().question.list).toEqual(expected);
    });
  });

  describe('loadQuestion', () => {
    it('should update the question', () => {
      const expected: QuestionDto = {
        question: 'a question',
        url: '',
        choices: [],
        published_at: '',
      };
      store.dispatch(loadQuestion(expected));

      expect(store.getState().question.currentQuestion).toEqual(expected);
    });
  });

  describe('addQuestion', () => {
    it('should add the question to the list', () => {
      const expected: QuestionDto = {
        question: 'another question',
        url: '',
        choices: [],
        published_at: '',
      };
      store.dispatch(addQuestion(expected));

      expect(store.getState().question.list).toContain(expected);
    });
  });

  describe('voteChoice', () => {
    it('should add vote to a question choice', () => {
      const choice1: ChoiceDto = {
        choice: 'a choice',
        url: 'choice_url_1',
        votes: 0,
      };
      const choice2: ChoiceDto = {
        choice: 'a second choice',
        url: 'choice_url_1',
        votes: 0,
      };

      const expected: QuestionDto = {
        question: 'another question',
        url: 'question_url_1',
        choices: [choice1, choice2],
        published_at: '',
      };
      store.dispatch(addQuestion(expected));
      expect(store.getState().question.list).toContain(expected);

      store.dispatch(loadQuestion(expected));
      expect(store.getState().question.currentQuestion).toEqual(expected);

      const newChoice: ChoiceDto = {
        choice: 'a choice',
        url: 'choice_url_1',
        votes: 1,
      };
      store.dispatch(voteChoice(newChoice));
      expect(
        store.getState().question.currentQuestion.choices[0].votes,
      ).toEqual(1);
    });
  });
});
