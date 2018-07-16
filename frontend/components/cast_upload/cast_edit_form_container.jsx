import { connect } from 'react-redux';

import CastEditForm from './cast_edit_form';
import { updateCast } from '../../actions/cast_actions';

const mapStateToProps = state => {
  return {
    cast: {
      description: "",
      castImgFile: null,
      castImgUrl: null
    },
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCast: (cast) => dispatch(updateCast(cast))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastEditForm);
