import { connect } from 'react-redux';

import { fetchCast, updateCast, errorClear } from '../../actions/cast_actions';
import CastEditForm from './cast_edit_form';

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.entities.casts[ownProps.match.params.cast.id],
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id)),
    updateCast: (cast) => dispatch(updateCast(cast)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastEditForm);
