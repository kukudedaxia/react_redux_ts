// Action 是把数据从应用传到 store 的有效载荷, 简单来说就是一个描述“发生了什么”的普通对象
/*
 * action 类型
 */

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

/*
 * 其它的常量
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { type: ADD_TODO, text };
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index };
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter };
}

// 最简单的测试
export function increase() {
  return { type: 'INCREASE' };
}

export function decrease() {
  return { type: 'DECREASE' };
}

// export const actions = {
//   increase: () => ({ type: 'INCREASE' }),
//   decrease: () => ({ type: 'DECREASE' }),
// };
