import React, { useContext, useReducer } from "react";
import reducer, { initialState } from "./reducer";

const AccountContext = React.createContext();

export default AccountContext;

export const AppContextProvider = ({ children }) => (
  <AccountContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AccountContext.Provider>
);

export const useAppState = () => useContext(AccountContext);
