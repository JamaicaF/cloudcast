import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveUser = ({user, casts}) => {
  return {
    type: RECEIVE_USER,
    user,
    casts
  };
};

const receiveUserErrors = (errors) => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  };
};

export const fetchUser = (id) => {
  return dispatch => {
    return UserApiUtil.fetchUser(id).then((payload) => {
      return dispatch(receiveUser(payload));
    });
  };
};

export const updateUser = (id, user) => {
  return dispatch => {
    return UserApiUtil.updateUser(id, user).then((user) => {
      return dispatch(receiveUser(user));
    }, (error) => {
      return dispatch(receiveUserErrors(error.responseJSON));
    });
  };
};

export const errorClear = () => {
  return dispatch => {
    return dispatch(receiveUserErrors([]));
  };
};
