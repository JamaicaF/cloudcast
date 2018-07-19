import { connect } from 'react-redux';

import { fetchCast } from '../../actions/cast_actions';

import PlaybackBar from './playback_bar';

const mapStateToProps = state => {
  return {
    currentPlaybackId: state.ui.currentPlayback.id || {},
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: () => dispatch(fetchCast())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaybackBar);
