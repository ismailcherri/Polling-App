import { FC } from 'react';
import dayjs from 'dayjs';

const Date: FC<{ datString: string }> = (props) => {
  return <>{dayjs(props.datString).format('MM-DD-YYYY')}</>;
};

export default Date;
