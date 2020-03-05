import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import { Responsive, WidthProvider } from "react-grid-layout";
import "../node_modules/react-grid-layout/css/styles.css";
import "../node_modules/react-resizable/css/styles.css";

import { StateProvider } from "./contexts/AccountContext";
import reducer, { initialState } from "./contexts/reducer";

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
import TestPage from "./pages/TestPage";

import EditLayoutButton from "./components/EditLayoutButton";

const ResponsiveReactGridLayout = WidthProvider(Responsive);

function App() {
  const [editLayout, setEditLayout] = React.useState(false);

  const browserHeight = window.innerHeight;

  return (
    <>
      <StateProvider initialState={initialState} reducer={reducer}>
        <CssBaseline />
        <Switch>
          <Route exact path='/login' component={LoginPage} />
          <Route exact path='/signup' component={SignUpPage} />

          <Route
            path='/'
            render={({ match: { url } }) => (
              <>
                <ResponsiveReactGridLayout
                  className='layout'
                  breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
                  cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
                  rowHeight={1}
                  margin={[0, 0]}
                  containerPadding={[0, 0]}
                  isDraggable={editLayout}
                  isResizable={editLayout}
                  compactType={"vertical"}
                  preventCollision={false}
                  measureBeforeMount={false}
                  useCSSTransforms={true}
                >
                  <div key='a' data-grid={{ i: "a", x: 0, y: 0, w: 12, h: 75 }}>
                    <NavBar />
                  </div>

                  <div
                    key='b'
                    data-grid={{
                      i: "b",
                      x: 0,
                      y: 1,
                      w: 12,
                      h: Number(`${browserHeight - 75}`)
                    }}
                  >
                    <Switch>
                      <Route
                        exact
                        path={`${url}dashboard`}
                        component={DashboardPage}
                      />
                      <Route
                        exact
                        path={`${url}accounts`}
                        component={AccountsPage}
                      />
                      <Route
                        exact
                        path={`${url}records`}
                        component={RecordsPage}
                      />
                      <Route exact path={`${url}test`} component={TestPage} />
                      <Route
                        exact
                        path={`${url}analytics`}
                        component={AnalyticsPage}
                      />
                      <Route
                        exact
                        path={`${url}imports`}
                        component={ImportsPage}
                      />
                      <Route exact path='/404' component={NoMatchPage} />
                      <Route path='*'>
                        <Redirect to='/404' />
                      </Route>
                    </Switch>
                  </div>
                </ResponsiveReactGridLayout>
              </>
            )}
          />
        </Switch>
        <EditLayoutButton
          editLayout={editLayout}
          onEditLayout={() => setEditLayout(!editLayout)}
        />
      </StateProvider>
    </>
  );
}

export default App;
