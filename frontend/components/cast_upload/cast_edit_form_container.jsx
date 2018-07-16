import { connect } from 'react-redux';

import { updateCast, errorClear } from '../../actions/cast_actions';
import CastEditForm from './cast_edit_form';

const mapStateToProps = (state) => {
  return {
    cast: state.entities.casts[state.ui.currentCast.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateCast: (cast) => dispatch(updateCast(cast)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastEditForm);
