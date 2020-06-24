// // @ts-nocheck
// import { connect } from 'react-redux';
// import React, { FC } from 'react';
// // eslint-disable-next-line import/no-unresolved
// import { setVisibilityFilter } from 'actions';

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
