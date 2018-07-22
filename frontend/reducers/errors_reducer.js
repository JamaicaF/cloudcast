import { combineReducers} from 'redux';

import session from './session_errors_reducer';
import cast from './cast_errors_reducer';
import user from './user_errors_reducer';

const errorsReducer = combineReducers({
  session,
  cast,
  user,
});

export default errorsReducer;
