import {
  RECEIVE_CAST_ERRORS,
  RECEIVE_CAST,
  RECEIVE_ALL_CASTS
} from '../actions/cast_actions';

const castErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAST_ERRORS:
      const newState = [].push(action.errors);
      return newState;
    case RECEIVE_CAST:
    case RECEIVE_ALL_CASTS:
      return [];
    default:
      return state;
  }
};

export default castErrorsReducer;
