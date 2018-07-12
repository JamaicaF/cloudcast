import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Splash from './splash';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className="logo">Cloudcast</h1>
      <NavBarContainer />
      <Route exact path="" component={Splash} />
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;
