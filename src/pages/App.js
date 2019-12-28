import React from "react";
import { Route, Switch } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import AccountsPage from "./AccountsPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/' component={AccountsPage} />
      </Switch>
    </>
  );
}

export default App;
