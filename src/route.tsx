import React, { ComponentType, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

export interface ProMenuType {
  path?: string; // 路由路径
  key?: string; // menuItem key
  name?: string; // 菜单项名称，影响页面标题和面包屑
  exact?: boolean; // 路径精确匹配
  routes?: ProMenuType[]; // 子菜单
  breadcrumb?: string; // 重置面包屑名称
  icon?: React.ReactNode; // 菜单图标
  hideInmenu?: boolean; // 菜单中隐藏该项
  component?: React.LazyExoticComponent<() => JSX.Element> | { default: React.ComponentType } | any; // 页面组件，当有子路由时，页面以children传入
}

export type ProMenuExport = ProMenuType | ProMenuType[];

// 菜单
export const menu: ProMenuExport = [
  {
    path: '/',
    exact: true,
    name: '首页',
    key: 'Home',
    component: React.lazy(() => import('./pages/Home')),
  },
  {
    path: '/demo',
    name: 'demo页',
    key: 'demo',
    routes: [
      {
        path: '/demo/demo1',
        exact: true,
        name: 'demo页1',
        key: 'demo1',
        component: React.lazy(() => import('./pages/Demo/Demo1')),
      },
      {
        path: '/demo/demo2',
        exact: true,
        name: 'demo页2',
        key: 'demo2',
        component: React.lazy(() => import('./pages/Demo/Demo2')),
      },
    ], // 待解决逗号出现eslint错误
  },
];

export const processMenuItem = (menuItem: ProMenuType) => {
  let WrapperComponent: ComponentType = ({ children }) => <>{children}</>;
  if (menuItem.component) {
    if ('default' in menuItem.component) {
      WrapperComponent = menuItem.component.default;
    } else {
      WrapperComponent = menuItem.component;
    }
  }
  const children = menuItem.routes ? (
    <Switch>
      {menuItem.routes.map(item => processMenuItem(item))}
      {menuItem.component ? null : <Redirect to={menuItem.routes[0].path || ''} />}
    </Switch>
  ) : (
    undefined
  );
  return (
    <Route
      path={menuItem.path}
      key={menuItem.key}
      exact={menuItem.exact}
      render={props => (
        // Suspense 标签将要进行懒加载的组件进行包裹，然后在fallback函数中输出加载过程的处理方式，也就是加载中的行为
        <Suspense fallback={null}>
          <WrapperComponent {...props}>{children}</WrapperComponent>
        </Suspense>
      )}
    />
  );
};

// 遍历菜单生成对应路由
export const Routes = () => {
  return <Switch>{menu.map(processMenuItem)}</Switch>;
};
