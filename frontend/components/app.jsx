import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util.jsx';

import Splash from './splash';
import NavBarContainer from './nav_bar/nav_bar_container';

import Modal from './modal/modal';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import CloudcastIndexContainer from './main_page/cloudcast_index_container';

const App = () => (
  <div>
    <Modal />
    <header>
      <h1 className="logo">Cloudcast</h1>
      <NavBarContainer />
      <Route exact path="" component={Splash} />
      <Route path="" component={CloudcastIndexContainer} />
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;
