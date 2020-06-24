// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';
import Test from './test';

export default function LoginPage({ history }) {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    window.localStorage.login = 'true';
    history.replace(from);
  };

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" onClick={login}>
        登录
      </button>
      <Test />
    </div>
  );
}
