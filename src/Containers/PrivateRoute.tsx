import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { connect } from "react-redux";
import { IStateProps } from "../common";
import { IStoreState } from "../Reducers/session";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component: any;
  checkAuth?: boolean;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const { component: Component, checkAuth, location, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

function mapStateToProps(state: IStoreState): IStateProps {
  return {
    checkAuth: state.session.checkAuth,
  };
}

const PrivateRouteCon = connect(mapStateToProps, null)(PrivateRoute);

export { PrivateRouteCon as PrivateRoute };
