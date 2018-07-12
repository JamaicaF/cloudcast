import { connect } from 'react-redux';
import UserProfileForm from './user_profile_form';

const mapStateToProps = state => {
  return {
    user: {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (user) => {
      return dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfileForm);
