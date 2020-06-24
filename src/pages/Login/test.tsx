// // @ts-nocheck
// import { connect } from 'react-redux';
// import React, { FC } from 'react';
// // eslint-disable-next-line import/no-unresolved
// import { setVisibilityFilter } from 'actions';

import { connect } from 'react-redux';
import React, { FC } from 'react';

// // 按钮组件
// interface LinkProps {
//   active: boolean;
//   onClick: () => void;
// }
// const Link: FC<LinkProps> = ({ active, children, onClick }) => {
//   if (active) {
//     return <span>{children}</span>;
//   }
//   return (
//     <a
//       href=""
//       onClick={e => {
//         e.preventDefault();
//         onClick();
//       }}
//     >
//       {children}
//     </a>
//   );
// };

// const mapStateToProps = (state: any, ownProps: any[]) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter,
//   };
// };

// const mapDispatchToProps = (dispatch: any, ownProps: any) => {
//   return {
//     onClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter));
//     },
//   };
// };

// const FilterLink = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// )(Link);

// export default FilterLink;

interface ButtonsProps {
  count: number;
  add: () => void;
  dec: () => void;
}
const Buttons: FC<ButtonsProps> = ({ count, add, dec }) => {
  return (
    <div>
      <span>{count}</span>
      <button type="button" onClick={() => add()}>
        add
      </button>
      <button type="button" onClick={() => dec()}>
        del
      </button>
    </div>
  );
};
const mapStateToProps = (state: { count: number }) => {
  return {
    // prop : state.xxx  | 意思是将state中的某个数据映射到props中
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // 默认传递参数就是dispatch 把各种dispatch也变成了props让你可以直接使用
  return {
    add: () => {
      dispatch({
        type: 'INCREASE',
      });
    },
    dec: () => {
      dispatch({
        type: 'DECREASE',
      });
    },
  };
};

const Test = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buttons);

export default Test;
