import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser,
  };
};

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER,
  };
};

const receiveErrors = (errors) => {
  return {
    type: RECEIVE_SESSION_ERRORS,
    errors,
  };
};

export const login = (user) => {
  return dispatch => {
    return SessionApiUtil.login(user).then((currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    }, (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    });
  };
};

export const signup = (user) => {
  return dispatch => {
    return SessionApiUtil.signup(user).then((currentUser) => {
      return dispatch(receiveCurrentUser(currentUser));
    }, (error) => {
      return dispatch(receiveErrors(error.responseJSON));
    });
  };
};

export const logout = () => {
  return dispatch => {
    return SessionApiUtil.logout().then(() => {
      return dispatch(logoutCurrentUser());
    });
  };
};

export const errorClear = () => {
  return dispatch => {
    return dispatch(receiveErrors([]));
  };
};
