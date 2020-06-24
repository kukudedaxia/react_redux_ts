// 主要动这个文件
import { createBrowserHistory } from 'history';
import React from 'react';
import { Route, Router, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import CustomLayout from './components/Layout';
import LoginPage from './pages/Login';
import { Routes } from './route';
// @ts-ignore
import { rootStore } from './store/index';

const Main = () => {
  return (
    <CustomLayout>
      <Routes />
      <Route
        path="/a"
        render={({ location }) =>
          window.localStorage.login ? (
            <div>a的页面</div>
          ) : (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: location },
              }}
            />
          )
        }
      />
    </CustomLayout>
  );
};

export const history = createBrowserHistory();

const App = () => {
  return (
    <Provider store={rootStore}>
      <Router history={history}>
        <Switch>
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" render={() => <Main />} />
        </Switch>
      </Router>
    </Provider>
  );
};

// 1. <BrowserRouter> 等价于 <Router history>
// 2. useHistory() 等价于 withRouter() 可以访问history,location对象
// 3. 使用<Router />是为了在外面可以进行路由操作
// 4. react-router 5.1以后支持hook， redux v7.1.0 开始支持 Hook API 并暴露了 useDispatch 和 useSelector 等 hook
// 5. react-hook的useHIstory传递参数会有错误
export default App;
