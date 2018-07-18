import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { errorClear } from '../../actions/cast_actions';
import CastUpload from './cast_upload';

const mapStateToProps = (state) => {
  return {
    cast: state.entities.casts[state.ui.currentCast.id] || {},
    errors: state.errors.cast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    errorClear: () => dispatch(errorClear())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastUpload));
