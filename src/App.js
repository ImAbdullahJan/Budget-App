import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { CssBaseline } from "@material-ui/core";

import { NavBar } from "components";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import RecordsPage from "./pages/RecordsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ImportsPage from "./pages/ImportsPage";
import NoMatchPage from "./pages/NoMatchPage";

function App() {
  return (
    <>
      <CssBaseline />
      <Switch>
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/signup' component={SignUpPage} />

        <Route
          path='/'
          render={({ match: { url } }) => (
            <>
              <NavBar />
              <Route exact path={`${url}dashboard`} component={DashboardPage} />
              <Route exact path={`${url}accounts`} component={AccountsPage} />
              <Route exact path={`${url}records`} component={RecordsPage} />
              <Route exact path={`${url}analytics`} component={AnalyticsPage} />
              <Route exact path={`${url}imports`} component={ImportsPage} />
              <Route exact path='/404' component={NoMatchPage} />
              <Route path='/*'>
                <Redirect to='/404' />
              </Route>
            </>
          )}
        />
      </Switch>
    </>
  );
}

export default App;
