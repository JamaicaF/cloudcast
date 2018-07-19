import { RECEIVE_PLAYBACK_CAST, TOGGLE_PLAY_PAUSE } from '../actions/current_playback_actions';
import { merge } from 'lodash';

const defaultState = {
  displayPlaybackBar: false,
  playback: false,
  playbackId: 0
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYBACK_CAST:
      newState.playbackId = action.playbackId;
      newstate.displayPlaybackBar = true;
      return newState;
    case TOGGLE_PLAY_PAUSE:
      newState.playback = !newState.playback;
      return newState;
    default:
      return state;
  }
};
