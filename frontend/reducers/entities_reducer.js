import { combineReducers } from 'redux';

import users from './users_reducer';
import casts from './casts_reducer';

const entitiesReducer = combineReducers({
  users,
  casts,
});

export default entitiesReducer;
