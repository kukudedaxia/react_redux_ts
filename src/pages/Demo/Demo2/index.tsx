import React, { FC } from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Demo2: FC<RouteComponentProps> = ({ history, location }) => {
  // const history = useHistory();
  // const location = useLocation();
  function handleClick() {
    history.push({ pathname: '/', state: { from: location } });
  }
  return (
    <div>
      <a>Demo2</a>
      <button type="button" onClick={handleClick}>
        Go Home
      </button>
    </div>
  );
};

export default Demo2;
