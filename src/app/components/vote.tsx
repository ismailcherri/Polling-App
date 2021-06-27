import { FC } from 'react';

const Vote: FC<{ votes: number }> = (props) => {
  return <>Votes: {props.votes}</>;
};

export default Vote;
