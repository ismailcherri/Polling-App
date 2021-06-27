import { FC } from 'react';
import { ChoiceDto } from 'src/features/question/question-slice';
import Percent from 'src/app/components/percent';

const Choice: FC<{ currentChoice: ChoiceDto; totalVotes: number }> = ({
  currentChoice: { choice, votes },
  totalVotes,
}) => {
  return (
    <>
      {choice} {votes} <Percent votes={votes} totalVotes={totalVotes} />
    </>
  );
};

export default Choice;
