import { connect } from 'react-redux';

import CastEditForm from './cast_edit_form';
import { fetchCast, updateCast } from '../../actions/cast_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.casts[ownProps.match.params.cast.id],
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id)),
    updateCast: (cast) => dispatch(updateCast(cast))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastEditForm);
