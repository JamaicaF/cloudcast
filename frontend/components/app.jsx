import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute, ShieldedRoute } from '../util/route_util.jsx';

import SplashContainer from './splash';
import NavBarContainer from './nav_bar/nav_bar_container';
import PlaybackBarContainer from './playback_bar/playback_bar_container';

import Modal from './session_form/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import CastUploadContainer from './cast_upload/cast_upload_container';
import CastIndexContainer from './casts/cast_index_container';
import CastShowContainer from './casts/cast_show_container';
import CastEditFormContainer from './cast_upload/cast_edit_form_container';

const App = ({ loggedIn }) => (
  <div>
    <Modal />
    <header>
      <NavBarContainer />
    </header>

    <Switch>
      <Route path="/" exact render={((props) => (
          loggedIn ? (
            <CastIndexContainer />
          ): (
            <SplashContainer />
          )
        ))} />
      <Route path="/upload/" component={CastUploadContainer} />
      <Route path="/discover/" component={CastIndexContainer} />
      <Route exact path="/casts/:castId/" component={CastShowContainer} />
      <ShieldedRoute path="/casts/:castId/edit/" component={CastEditFormContainer} />
    </Switch>

    <PlaybackBarContainer />
  </div>
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const AppContainer = withRouter(connect(mapStateToProps)(App));
export default AppContainer;
