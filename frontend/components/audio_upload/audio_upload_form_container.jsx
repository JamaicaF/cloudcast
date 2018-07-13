import { connect } from 'react-redux';
import AudioUploadForm from './audio_upload_form';
import { fetchCasts } from '../../actions/cast_actions';

const mapStateToProps = state => {
  return {
    cast: {
      title: "",
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (cast) => {
      return dispatch();
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioUploadForm);
