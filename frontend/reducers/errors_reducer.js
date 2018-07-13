import { combineReducers} from 'redux';

import session from './session_errors_reducer';
import cast from './cast_errors_reducer';

const errorsReducer = combineReducers({
  session,
  cast,
});

export default errorsReducer;
