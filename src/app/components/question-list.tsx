import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  selectQuestions,
  selectStatus,
} from 'src/features/question/question-slice';
import { useAppDispatch } from 'src/app/hooks';
import { loadQuestionsAsync } from 'src/features/question/question-api';
import Question from 'src/app/components/question';

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
      <div className="d-grid">
        {list.map((question) => (
          <div key={question.url}>
            <Question {...question} />
          </div>
        ))}
      </div>
    </>
  );
}

export default QuestionList;
