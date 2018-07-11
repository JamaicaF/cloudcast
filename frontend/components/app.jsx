import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Modal from './modal/modal';
import NavBarContainer from './nav_bar/nav_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>Cloudcast</h1>
      <NavBarContainer />
    </header>
    <Switch>
    </Switch>
  </div>
);

export default App;
