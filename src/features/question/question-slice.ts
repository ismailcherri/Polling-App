import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChoiceDto {
  choice: string;
  url: string;
  votes: number;
}

export interface QuestionDto {
  question: string;
  published_at: string;
  url: string;
  choices: ChoiceDto[];
}

export interface CreateQuestionDto {
  question: string;
  choices: string[];
}

export interface QuestionState {
  list: QuestionDto[];
  currentQuestion: QuestionDto;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: QuestionState = {
  list: [],
  currentQuestion: { choices: [], question: '', url: '', published_at: '' },
  status: 'idle',
};

export const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {
    startLoading: (state) => {
      state.status = 'loading';
    },
    endLoading: (state) => {
      state.status = 'idle';
    },
    loadQuestions: (state, action: PayloadAction<QuestionDto[]>) => {
      state.list = action.payload;
      state.status = 'idle';
    },
    loadQuestion: (state, action: PayloadAction<QuestionDto>) => {
      state.currentQuestion = action.payload;
      state.status = 'idle';
    },
    addQuestion: (state, action: PayloadAction<QuestionDto>) => {
      state.list.push(action.payload);
      state.status = 'idle';
    },
    voteChoice: (state, action: PayloadAction<ChoiceDto>) => {
      const choice = state.currentQuestion.choices.find(
        (choice) => choice.url === action.payload.url,
      );
      if (choice) {
        choice.votes = action.payload.votes;
      }
      state.status = 'idle';
    },
  },
});

export const {
  loadQuestions,
  loadQuestion,
  addQuestion,
  voteChoice,
  startLoading,
  endLoading,
} = questionSlice.actions;

export default questionSlice.reducer;
