import { connect } from 'react-redux';

import { createCast, errorClear } from '../../actions/cast_actions';
import CastCreateForm from './cast_create_form';

const mapDispatchToProps = dispatch => {
  return {
    createCast: (cast) => dispatch(createCast(cast)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(null, mapDispatchToProps)(CastCreateForm);
