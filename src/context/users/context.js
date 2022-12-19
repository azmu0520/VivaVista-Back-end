import React, { createContext, useContext, useReducer } from 'react';
import { usersReducer, initialState } from './reducer';

const UsersContext = createContext();

export const useUsersContext = () => useContext(UsersContext);

export const UsersContextProvider = ({ children }) => {
  return (
    <UsersContext.Provider value={useReducer(usersReducer, initialState)}>
      {children}
    </UsersContext.Provider>
  );
};
