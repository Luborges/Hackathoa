import React from "react";
import { isAuthenticated } from "../auth";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { routes } from "./routes.js";
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Public = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/initial", state: { from: props.location } }}
        />
      )
    }
  />
);
const Routes = () => (
  <BrowserRouter>
    <Switch>
      {routes.map((item, i) => {
        if (item.private) {
          return (
            <PrivateRoute
              exact
              path={item.path}
              component={item.component}
              key={i}
            />
          );
        } else {
          return (
            <Public exact path={item.path} component={item.component} key={i} />
          );
        }
      })}
      <Public path="*" component={() => <h1>Erro page not found</h1>} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
