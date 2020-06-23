import React from 'react';
import { withRouter } from 'react-router-dom';

const CustomLayout = withRouter(({ children }) => {
  return (
    <div>
      公共布局
      <div>{children}</div>
    </div>
  );
});

export default CustomLayout;
