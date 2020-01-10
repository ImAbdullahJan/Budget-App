import React, { useContext, useReducer } from "react";
import reducer from "./reducer";
import { accountsData } from "../api/fakeData";

const AccountContext = React.createContext();

export default AccountContext;

const initialState = {
  accounts: accountsData
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const contextValue = {
    accounts: state.accounts,
    dispatch
  };
  return (
    <AccountContext.Provider value={contextValue}>
      {children}
    </AccountContext.Provider>
  );
};

export const useAppState = () => useContext(AccountContext);
