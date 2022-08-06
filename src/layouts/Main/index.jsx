import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';

export const Main = () => (
  <div>
    <Header />
    <Outlet />
  </div>
);
