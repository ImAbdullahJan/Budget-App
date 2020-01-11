import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { accountsData } from "../api/fakeData";

const AccountContext = React.createContext();

export default AccountContext;

const initialState = {
  accounts: accountsData
};

export const AppContextProvider = ({ children }) => (
  <AccountContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </AccountContext.Provider>
);
export const useAppState = () => useContext(AccountContext);
