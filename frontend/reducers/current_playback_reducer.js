import { merge } from 'lodash';

import {
  RECEIVE_PLAYBACK_CAST,
  TOGGLE_PLAY_PAUSE,
  TOGGLE_MUTE_UNMUTE
} from '../actions/current_playback_actions';

const defaultState = {
  displayPlaybackBar: false,
  playback: false,
  playbackId: 0,
  muteAudio: false
};

export default (state = defaultState, action) => {
  Object.freeze(state);
  const newState = merge({}, state);
  switch (action.type) {
    case RECEIVE_PLAYBACK_CAST:
      newState.playbackId = action.playbackId;
      newState.displayPlaybackBar = true;
      return newState;
    case TOGGLE_PLAY_PAUSE:
      newState.playback = !newState.playback;
      return newState;
    case TOGGLE_MUTE_UNMUTE:
      newState.muteAudio = !newState.muteAudio;
      return newState;
    default:
      return state;
  }
};
