import React from 'react';
import { Redirect, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    (loggedIn) ? (
      <Redirect to="/" />
    ) : (
      <Component {...props} />
    )
  )}/>
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
    (loggedIn) ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Shielded = ({ component: Component, path, userCasts, exact, location }) => {
  let matchCastToUser = userCasts.some((cast) => {
    return (cast == location.pathname.split("/")[2])
  })

  return (
    <Route path={path} exact={exact} render={(props) => (
      (matchCastToUser) ? (
        <Component {...props} />
      ) : (
        <Redirect to="/" />
      )
    )} />
  )
};

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id),
    userCasts: state.entities.users[state.session.id].castIds
  };
};

export const ShieldedRoute = withRouter(connect(mapStateToProps)(Shielded));

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));
