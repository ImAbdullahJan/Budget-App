import React from "react";
import { Route, Switch } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import DashboardPage from "./DashboardPage";
import AccountsPage from "./AccountsPage";
import RecordsPage from "./RecordsPage";
import AnalyticsPage from "./AnalyticsPage";
import ImportsPage from "./ImportsPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='/dashboard' component={DashboardPage} />
        <Route exact path='/accounts' component={AccountsPage} />
        <Route exact path='/records' component={RecordsPage} />
        <Route exact path='/analytics' component={AnalyticsPage} />
        <Route exact path='/imports' component={ImportsPage} />
        <Route exact path='/' component={AccountsPage} />
      </Switch>
    </>
  );
}

export default App;
