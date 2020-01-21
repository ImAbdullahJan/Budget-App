import React from "react";

import { useAppState } from "../contexts/AccountContext";

const withAccountsData = WrappedComponent => {
  return props => {
    const [state, dispatch] = useAppState();
    return <WrappedComponent {...props} accounts={state.accounts} />;
  };
};

export default withAccountsData;
