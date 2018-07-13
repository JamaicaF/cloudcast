import { connect } from 'react-redux';
import AudioSubmissionForm from './audio_submission_form';

const mapStateToProps = state => {
  return {
    cast: {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (cast) => {
      return dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioSubmissionForm);
