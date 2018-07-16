import { combineReducers } from 'redux';

import modal from './modal_reducer';
import currentCast from './current_cast_reducer';

const uiReducer = combineReducers({
  modal,
  currentCast,
});

export default uiReducer;
