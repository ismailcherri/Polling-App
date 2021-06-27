import { FC } from 'react';
import { voteChoiceAsync } from 'src/features/question/question-api';
import { useAppDispatch } from 'src/app/hooks';

const VoteButton: FC<{ url: string }> = ({ url }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(voteChoiceAsync(url))}>Vote!</button>
    </>
  );
};

export default VoteButton;
