import { connect } from 'react-readux';
import AudioUploadForm from './audio_upload_form';

const mapStateToProps = state => {
  return {
    cloudcast: {
      title: "",
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (cloudcast) => {
      return dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioUploadForm);
