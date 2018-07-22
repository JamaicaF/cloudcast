import { merge } from 'lodash';

import { RECEIVE_USER } from '../actions/user_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      return merge({}, state, { [action.user.id]: action.user });
    default:
      return state;
  }
};

export default usersReducer;
