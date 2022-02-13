import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { HOMEPAGE, MINTPAGE } from "./settings/constants";

import { InLineLoader } from "./components/InlineLoader/InlineLoader";
import Mint from "./pages/Mint/mint";

//Main page
const HomePage = lazy(() => import("./pages/Home/Home"));

function PublicRoute({ children, ...rest }) {
  let isAuthenticated = true;
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
const Routes = () => {
  return (
    <Suspense fallback={<InLineLoader />}>
      <Switch>
        <PublicRoute exact={true} path={HOMEPAGE}>
          <Suspense fallback={<InLineLoader />}>
            <HomePage />
          </Suspense>
        </PublicRoute>
        <PublicRoute exact={true} path={MINTPAGE}>
          <Suspense fallback={<InLineLoader />}>
            <Mint />
          </Suspense>
        </PublicRoute>
      </Switch>
    </Suspense>
  );
};

export default Routes;
