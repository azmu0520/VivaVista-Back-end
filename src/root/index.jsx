import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../components/Home';
import Sidebar from '../components/Sidebar';
import { data } from '../utilits/sidebar';
const Root = () => {
  return (
    <Routes>
      <Route element={<Sidebar />}>
        {data?.map(({ id, path, Component }) => (
          <Route key={id} path={path} element={<Component />} />
        ))}
        <Route path='/' element={<Home />} />
      </Route>
      <Route path={'*'} element={<div>you are lost</div>} />
    </Routes>
  );
};

export default Root;
