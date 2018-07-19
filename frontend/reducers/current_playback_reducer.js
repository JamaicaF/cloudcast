import { RECEIVE_PLAYBACK_CAST } from '../actions/current_playback_actions';

const defaultState = {
  playback: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case RECEIVE_PLAYBACK_CAST:
      return {playbackId: action.id};
    default:
      return state;
  }
};
