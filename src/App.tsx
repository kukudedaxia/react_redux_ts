// 主要动这个文件
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import CustomLayout from './components/Layout';
import LoginPage from './pages/Login';
import { Routes } from './route';

const Main = () => {
  return (
    <CustomLayout>
      <Routes />
    </CustomLayout>
  );
};

export const history = createBrowserHistory();

const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={LoginPage} />
        <Route path="/" render={() => <Main />} />
      </Switch>
    </Router>
  );
};

// 1. <BrowserRouter> 等价于 <Router history>
// 2. useHistory() 等价于 withRouter() 可以访问history,location对象
// 3. 使用<Router />是为了在外面可以进行路由操作
// 4. react-router 5.1以后支持hook， redux v7.1.0 开始支持 Hook API 并暴露了 useDispatch 和 useSelector 等 hook
// 5. 使用history 对 react-hook的useHIstory 冲突
export default App;
