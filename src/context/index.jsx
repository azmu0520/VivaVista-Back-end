import React from 'react';
import { UsersContextProvider } from './users/context';

const MainContextProvider = ({ children }) => {
  return <UsersContextProvider>{children}</UsersContextProvider>;
};

export default MainContextProvider;
