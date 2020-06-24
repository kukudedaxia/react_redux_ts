// import React, { FC } from 'react';
// import FilterLink from './filterLink';

// // 展示组件

// interface TodoListProps {
//   todos: {
//     id: number;
//     completed: boolean;
//     text: string;
//   }[];
//   onTodoClick: (index: number) => void;
// }

// // 列表
// const TodoList: FC<TodoListProps> = ({ todos, onTodoClick }) => (
//   <ul>
//     {todos.map((todo, index) => (
//       <Todo key={index} {...todo} onClick={() => onTodoClick(index)} />
//     ))}
//   </ul>
// );

// // 列表单项
// interface TodoProps {
//   onClick: () => void;
//   completed: boolean;
//   text: string;
// }
// const Todo: FC<TodoProps> = ({ onClick, completed, text }) => (
//   <li
//     onClick={onClick}
//     style={{
//       textDecoration: completed ? 'line-through' : 'none',
//     }}
//   >
//     {text}
//   </li>
// );

// const Footer = () => (
//   <p>
//     Show: <FilterLink filter="SHOW_ALL">All</FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
//     {', '}
//     <FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
//   </p>
// );

// export default Todo;
