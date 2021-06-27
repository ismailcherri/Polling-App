import { FC } from 'react';
import Date from 'src/app/components/date';

const Published: FC<{ publishDateString: string }> = (props) => {
  return (
    <>
      Published: <Date datString={props.publishDateString} />
    </>
  );
};

export default Published;
