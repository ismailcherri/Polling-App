import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import QuestionList from 'src/app/components/question-list';
import QuestionDetail from 'src/app/components/question-detail';

function App() {
  return (
    <div className="container">
      <h2>
        Polling App{' '}
        <Link to="/" style={{ fontSize: '14px' }}>
          Home
        </Link>
      </h2>
      <Switch>
        <Route exact path="/" children={<QuestionList />} />
        <Route path="/:url" children={<QuestionDetail />} />
      </Switch>
    </div>
  );
}

export default App;
