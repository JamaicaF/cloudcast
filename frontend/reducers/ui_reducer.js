import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentCast from './current_cast_reducer';
import currentPlayback from './current_playback_reducer';

const uiReducer = combineReducers({
  modal,
  currentCast,
  currentPlayback,
});

export default uiReducer;
