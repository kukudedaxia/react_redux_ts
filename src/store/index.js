import { createStore } from 'redux';
import todoApp from './reducers';

// 创建store Redux 应用只有一个单一的 store
export const rootStore = createStore(todoApp);

// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数用来注销监听器
const unsubscribe = rootStore.subscribe(() => console.log(rootStore.getState()));

// 停止监听 state 更新
// unsubscribe();
