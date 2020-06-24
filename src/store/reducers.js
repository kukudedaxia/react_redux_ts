import { combineReducers } from 'redux';
// Reducers 指定了应用状态的变化如何响应 actions 并发送到 store 的，记住 actions 只是描述了有事情发生了这一事实，并没有描述应用如何更新 state。
// reducer 一定要保持纯净。
// 只要传入参数相同，返回计算得到的下一个 state 就一定相同。没有特殊情况、没有副作用，没有 API 请求、没有变量修改，单纯执行计算。

import { VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO } from './actions';

const { SHOW_ALL } = VisibilityFilters;

// const initialState = {
//   visibilityFilter: VisibilityFilters.SHOW_ALL,
//   todos: [],
//   count: 0,
// };

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
}

// function todoApp(state = initialState, action) {
//   switch (action.type) {
//     case SET_VISIBILITY_FILTER:
//       return { ...state, visibilityFilter: visibilityFilter(state.visibilityFilter, action) };
//     case ADD_TODO:
//       return { ...state, todos: todos(state.todos, action) };
//     case TOGGLE_TODO:
//       return { ...state, todos: todos(state.todos, action) };
//     default:
//       return state;
//   }
// }

// 开发一个函数来做为主 reducer，它调用多个子 reducer 分别处理 state 中的一部分数据，然后再把这些数据合成一个大的单一对象
// 主 reducer 并不需要设置初始化时完整的 state。初始时，如果传入 undefined, 子 reducer 将负责返回它们的默认值。
// function todoApp(state = {}, action) {
//   return {
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//     todos: todos(state.todos, action),
//     count: count(state.count, action),
//   };
// }

// 最简单的测试
function count(state = 0, action) {
  switch (action.type) {
    case 'INCREASE':
      return state + 1;
    case 'DECREASE':
      return state - 1;
    default:
      return state;
  }
}

// 等价于上面
const todoApp = combineReducers({
  visibilityFilter,
  todos,
  count,
});

export default todoApp;
