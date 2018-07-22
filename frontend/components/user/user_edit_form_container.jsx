import { connect } from 'react-redux';
// import { withRouter } from 'react-router-dom';

import { fetchUser, updateUser, errorClear } from '../../actions/user_actions';
import UserEditForm from './user_edit_form';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[state.session.id],
    errors: state.errors.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
    updateUser: (id, user) => dispatch(updateUser(id, user)),
    errorClear: () => dispatch(errorClear())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserEditForm);
