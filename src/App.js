import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { accountsData } from "./api/fakeData";

import { CssBaseline } from "@material-ui/core";

import { NavBar } from "components";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
// import DashboardPage from "./pages/DashboardPage";
import AccountsPage from "./pages/AccountsPage";
import RecordsPage from "./pages/RecordsPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import ImportsPage from "./pages/ImportsPage";
import NoMatchPage from "./pages/NoMatchPage";

// function NestedRoute() {
//   return (
//     <>
//       <NavBar />
//       <Route exact path='/dashboard' component={RecordsPage} />
//       <Route exact path='/accounts' component={AccountsPage} />
//       <Route exact path='/records' component={RecordsPage} />
//       <Route exact path='/analytics' component={AnalyticsPage} />
//       <Route exact path='/imports' component={ImportsPage} />
//       <Route exact path='/404' component={NoMatchPage} />
//       <Route path='*'>
//         <Redirect to='/404' />
//       </Route>
//     </>
//   );
// }

function App() {
  const [accounts, setAccounts] = React.useState(accountsData);

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
              <Route exact path={`${url}dashboard`} component={RecordsPage} />
              <Route
                exact
                path={`${url}accounts`}
                render={props => (
                  <AccountsPage
                    {...props}
                    accounts={accounts}
                    setAccounts={setAccounts}
                  />
                )}
              />
              <Route exact path={`${url}records`} component={RecordsPage} />
              <Route exact path={`${url}analytics`} component={AnalyticsPage} />
              <Route
                exact
                path={`${url}imports`}
                render={props => <ImportsPage {...props} accounts={accounts} />}
              />
              <Route exact path='/404' component={NoMatchPage} />
              <Route path='*'>
                <Redirect to='/404' />
              </Route>
            </>
          )}
        />

        {/* <Route path='/' component={NestedRoute} /> */}
      </Switch>
    </>
  );
}

export default App;
