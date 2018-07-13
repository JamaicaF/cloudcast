
import { connect } from 'react-redux';
import AudioSubmissionForm from './audio_submission_form';

const mapStateToProps = state => {
  return {
    cloudcast: {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (cloudcast) => {
      return dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioSubmissionForm);
