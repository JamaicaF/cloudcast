import { connect } from 'react-redux';
import AudioUploadForm from './audio_upload_form';
import { createCast } from '../../actions/cast_actions';

const mapStateToProps = state => {
  return {
    cast: {
      title: "",
      castFile: null,
      castUrl: null
    },
    errors: state.errors.session
  };
};

const mapDispatchToProps = dispatch => {
  return {
    uploadAudio: (cast) => {
      return dispatch(createCast(cast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioUploadForm);
