import { FC } from 'react';

const Percent: FC<{ votes: number; totalVotes: number }> = ({
  votes,
  totalVotes,
}) => {
  return <>{Math.round((votes / totalVotes) * 100)}%</>;
};

export default Percent;
