import React from 'react';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import SplashContainer from './splash';
import NavBarContainer from './nav_bar/nav_bar_container';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import CastIndexContainer from './casts/cast_index_container';

import AudioUploadFormContainer from './audio_upload/audio_upload_form_container';

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
      <Route path="/discover/" component={CastIndexContainer} />
      <Route path="/upload/" component={AudioUploadFormContainer} />
    </Switch>
  </div>
);

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const AppContainer = withRouter(connect(mapStateToProps)(App));
export default AppContainer;
