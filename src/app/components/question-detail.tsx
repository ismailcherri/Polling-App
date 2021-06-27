import { useLocation } from 'react-router-dom';
import { useAppDispatch } from 'src/app/hooks';
import { useEffect } from 'react';
import { loadQuestionAsync } from 'src/features/question/question-api';
import { useSelector } from 'react-redux';
import {
  selectQuestion,
  selectQuestionTotalVotes,
} from 'src/features/question/question-slice';
import Choice from 'src/app/components/choice';

function QuestionDetail() {
  let location = useLocation();
  const dispatch = useAppDispatch();
  const currentQuestion = useSelector(selectQuestion);
  const totalVotes = useSelector(selectQuestionTotalVotes);

  useEffect(() => {
    dispatch(loadQuestionAsync(location.pathname));
  }, [dispatch, location]);

  return (
    <>
      <h3>Question Detail</h3>
      <p>Question: {currentQuestion.question}</p>
      <div>
        {currentQuestion.choices.map((choice) => (
          <div key={choice.url}>
            <Choice currentChoice={choice} totalVotes={totalVotes} />
          </div>
        ))}
      </div>
    </>
  );
}

export default QuestionDetail;
