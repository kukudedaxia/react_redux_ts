import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router';

const Demo1: FC<RouteComponentProps> = ({ history }) => {
  function handleClick() {
    history.push({ pathname: '/demo/demo2' });
  }
  return (
    <div>
      <a>Demo1</a>
      <button type="button" onClick={handleClick}>
        Go Demo2
      </button>
    </div>
  );
};

export default Demo1;
