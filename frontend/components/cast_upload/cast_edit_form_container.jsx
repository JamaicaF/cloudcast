import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateCast, errorClear } from '../../actions/cast_actions';
import CastEditForm from './cast_edit_form';

const mapStateToProps = (state) => {
  return {
    cast: state.entities.casts[state.ui.currentCast.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCast: (id, cast) => dispatch(updateCast(id, cast)),
    errorClear: () => dispatch(errorClear())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastEditForm));
