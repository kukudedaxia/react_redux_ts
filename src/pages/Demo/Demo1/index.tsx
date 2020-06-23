import React from 'react';
import { useHistory } from 'react-router-dom';

const Demo1 = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/demo/demo2');
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
