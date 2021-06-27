import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  selectQuestions,
  selectStatus,
} from 'src/features/question/question-slice';
import { useAppDispatch } from 'src/app/hooks';
import { loadQuestionsAsync } from 'src/features/question/question-api';
import Vote from 'src/app/components/vote';
import Published from 'src/app/components/published';

function QuestionList() {
  const dispatch = useAppDispatch();
  const loadingStatus = useSelector(selectStatus);
  useEffect(() => {
    dispatch(loadQuestionsAsync());
  }, [dispatch]);
  const list = useSelector(selectQuestions);

  if (loadingStatus !== 'idle') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <h3>Questions</h3>
      {list.map((question) => (
        <div key={question.url}>
          <Link to={question.url}>
            <h3>{question.question}</h3>
          </Link>
          <p>
            <Published publishDateString={question.published_at} />{' '}
            <Vote votes={question.choices.length} />
          </p>
        </div>
      ))}
    </>
  );
}

export default QuestionList;
