import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import QuestionList from 'src/app/components/question-list';
import QuestionDetail from 'src/app/components/question-detail';
import CreateQuestion from 'src/app/components/create-question';

function App() {
  return (
    <div className="container">
      <h2>
        Polling App{' '}
        <Link to="/" style={{ fontSize: '14px' }}>
          Home
        </Link>{' '}
        <Link to="/create" style={{ fontSize: '14px' }}>
          Add Question
        </Link>
      </h2>
      <Routes>
        <Route path="/" element={<QuestionList />} />
        <Route path="/create" element={<CreateQuestion />} />
        <Route path="/questions/:url" element={<QuestionDetail />} />
      </Routes>
    </div>
  );
}

export default App;
