import { FC } from 'react';
import { QuestionDto } from 'src/features/question/question-slice';
import { Link } from 'react-router-dom';
import Published from 'src/app/components/published';
import Vote from 'src/app/components/vote';
import style from './question.module.css';

const Question: FC<QuestionDto> = ({
  question,
  url,
  choices,
  published_at,
}) => {
  return (
    <>
      <Link to={url} className={style.link}>
        <h3>{question}</h3>
      </Link>
      <p>
        <Published publishDateString={published_at} />{' '}
        <Vote votes={choices.length} />
      </p>
    </>
  );
};

export default Question;
