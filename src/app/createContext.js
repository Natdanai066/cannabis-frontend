// createContext.js
import React, { createContext, useReducer, useContext } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const initialState = {
    isLoggedIn: false,
    user: null,
    error: null,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          user: action.payload,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          user: null,
          error: null,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <LoginContext.Provider value={{ state, dispatch }}>
      {children}
    </LoginContext.Provider>
  );
};

export const useLogin = () => {
  return useContext(LoginContext);
};
