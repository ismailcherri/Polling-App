import React from 'react';
import { Switch, Route } from 'react-router-dom';
import QuestionList from 'src/app/components/question-list';
import QuestionDetail from 'src/app/components/question-detail';

function App() {
  return (
    <div>
      <h2>Polling App</h2>
      <Switch>
        <Route path="/:url" children={<QuestionDetail />} />
        <Route path="/" children={<QuestionList />} />
      </Switch>
    </div>
  );
}

export default App;
