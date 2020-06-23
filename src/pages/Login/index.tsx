// @ts-nocheck
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function LoginPage({ history }) {
  const location = useLocation();
  const { from } = location.state || { from: { pathname: '/' } };
  const login = () => {
    history.replace(from);
  };
  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button type="button" onClick={login}>
        登录
      </button>
    </div>
  );
}
