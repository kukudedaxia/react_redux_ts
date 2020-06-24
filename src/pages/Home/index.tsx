import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <a>Home</a>
      <ul>
        <li>
          <Link to="/a">a</Link>
        </li>
        <li>
          <Link to="/demo">重定向demo1</Link>
        </li>
        <li>
          <Link to="/login">返回login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
