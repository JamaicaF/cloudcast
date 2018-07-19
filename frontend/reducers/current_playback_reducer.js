import { RECEIVE_CAST } from '../actions/cast_actions';

export default (state = { id: 0 }, action) => {
  switch (action.type) {
    case RECEIVE_CAST:
      return {id: action.cast.id};
    default:
      return state;
  }
};
