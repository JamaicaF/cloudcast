import React from 'react';
import { connect } from 'react-redux';

import { signup, errorClear } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import SessionForm from './session_form';

const mapStateToProps = state => {
  return {
    errors: state.errors.session,
    formType: 'Sign Up'
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: (user) => dispatch(signup(user)),
    signupForm: (
      <span onClick={() => dispatch(openModal('signup'))}>
        Sign Up
      </span>
    ),
    loginForm: (
      <span onClick={() => dispatch(openModal('login'))}>
        Log In
      </span>
    ),
    closeModal: () => dispatch(closeModal()),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
