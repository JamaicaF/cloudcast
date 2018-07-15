import { connect } from 'react-redux';
import AudioUploadForm from './audio_upload_form';
import { createCast } from '../../actions/cast_actions';

const mapStateToProps = state => {
  return {
    cast: {
      title: "",
      castFile: null,
      castUrl: null
    }
  };
};

const mapDispatchToProps = dispatch => {
  return {
    action: (cast) => {
      return dispatch(createCast(cast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AudioUploadForm);
