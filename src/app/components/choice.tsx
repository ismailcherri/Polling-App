import { FC } from 'react';
import { ChoiceDto } from 'src/features/question/question-slice';
import Percent from 'src/app/components/percent';
import VoteButton from 'src/app/components/vote-button';
import style from './choice.module.css';

const Choice: FC<{ currentChoice: ChoiceDto; totalVotes: number }> = ({
  currentChoice: { choice, votes, url },
  totalVotes,
}) => {
  return (
    <>
      <div className={style.choice}>
        <span>{choice}</span>
        <span>{votes}</span>
        <span>
          <Percent votes={votes} totalVotes={totalVotes} />
        </span>
        <VoteButton url={url} />
      </div>
    </>
  );
};

export default Choice;
