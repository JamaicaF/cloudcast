import React from 'react';
import { connect } from 'react-redux';

import { login, errorClear } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Log In'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(login(user)),
    signupForm: () => dispatch(openModal('signup')),
    loginForm: () => dispatch(openModal('login')),
    closeModal: () => dispatch(closeModal()),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
