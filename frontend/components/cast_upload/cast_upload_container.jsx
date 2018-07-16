import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CastUpload from './cast_upload';

const mapStateToProps = (state) => {
  return {
    cast: state.entities.casts[state.ui.currentCast] || {},
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastUpload));
