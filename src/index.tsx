import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { loadQuestionsAsync } from 'src/features/question/question-api';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

store.dispatch(loadQuestionsAsync());
// store.dispatch(loadQuestionAsync('/questions/4'));
// store.dispatch(voteChoiceAsync('/questions/4/choices/32'));

// store.dispatch(
//   addQuestionAsync({
//     question: 'Favourite pasta?',
//     choices: ['Bucatini', 'Fettuccine', 'Spaghetti', 'Linguine', 'Pappardelle'],
//   }),
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
