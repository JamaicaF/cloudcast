import {
  RECEIVE_CAST_ERRORS,
  RECEIVE_CAST,
} from '../actions/cast_actions';

const castErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CAST_ERRORS:
      return action.errors;
    case RECEIVE_CAST:
      return [];
    default:
      return state;
  }
};

export default castErrorsReducer;
