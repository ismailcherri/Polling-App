import { AppThunk } from 'src/app/store';
import { apiCallBegan } from 'src/middleware/base-api';
import {
  addQuestion,
  CreateQuestionDto,
  endLoading,
  loadQuestion,
  loadQuestions,
  startLoading,
  voteChoice,
} from 'src/features/question/question-slice';

export const loadQuestionsAsync = (): AppThunk => (dispatch) =>
  dispatch(
    apiCallBegan({
      url: '/questions',
      method: 'GET',
      onStart: startLoading.type,
      onSuccess: loadQuestions.type,
      onFail: endLoading.type,
    }),
  );

export const loadQuestionAsync =
  (url: string): AppThunk =>
  (dispatch) =>
    dispatch(
      apiCallBegan({
        url: url,
        method: 'GET',
        onStart: startLoading.type,
        onSuccess: loadQuestion.type,
        onFail: endLoading.type,
      }),
    );

export const addQuestionAsync =
  (question: CreateQuestionDto): AppThunk =>
  (dispatch) =>
    dispatch(
      apiCallBegan({
        url: '/questions',
        method: 'POST',
        onStart: startLoading.type,
        onSuccess: addQuestion.type,
        onFail: endLoading.type,
        data: question,
      }),
    );

export const voteChoiceAsync =
  (url: string): AppThunk =>
  (dispatch) =>
    dispatch(
      apiCallBegan({
        url,
        method: 'POST',
        onStart: startLoading.type,
        onSuccess: voteChoice.type,
        onFail: endLoading.type,
      }),
    );
