import { connect } from 'react-redux';

import CastCreateForm from './cast_create_form';
import { createCast } from '../../actions/cast_actions';

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
    createCast: (cast) => dispatch(createCast(cast))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastCreateForm);
