import { connect } from 'react-redux';

import { createCast, errorClear } from '../../actions/cast_actions';
import CastCreateForm from './cast_create_form';

const mapStateToProps = state => {
  return {
    cast: {
      title: "",
      castFile: null,
      castUrl: null
    },
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCast: (cast) => dispatch(createCast(cast)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastCreateForm);
