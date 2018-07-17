import { connect } from 'react-redux';

import { createCast, errorClear } from '../../actions/cast_actions';
import { openModal } from '../../actions/modal_actions';
import CastCreateForm from './cast_create_form';

const mapStateToProps = state => {
  return {
    loggedIn: Boolean(state.session.id)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    createCast: (cast) => dispatch(createCast(cast)),
    openModal: (modal) => dispatch(openModal(modal)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastCreateForm);
