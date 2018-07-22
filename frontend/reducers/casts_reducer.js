import { merge } from 'lodash';

import {
  RECEIVE_ALL_CASTS,
  RECEIVE_CAST,
  REMOVE_CAST,
} from '../actions/cast_actions';

const CastsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_CASTS:
      return merge({}, state, action.casts);
    case RECEIVE_CAST:
      return merge({}, state, { [action.cast.id]: action.cast});
    case REMOVE_CAST:
      const newState = merge({}, state);
      delete newState[action.id];
      return newState;
    default:
      return state;
  }
};

export default CastsReducer;
