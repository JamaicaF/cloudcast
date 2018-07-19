import { connect } from 'react-redux';

import PlaybackBar from './playback_bar';
import { receivePlaybackCast, togglePlayPause } from '../../actions/current_playback_actions';

const mapStateToProps = state => {
  let castToPlay = {};
  const playbackId = state.ui.currentPlayback.playbackId;
  if (playbackId > 0) {
    castToPlay = state.entities.casts[playbackId];
  }

  return {
    displayPlaybackBar: state.ui.currentPlayback.displayPlaybackBar,
    playback: state.ui.currentPlayback.playback,
    playbackId: state.ui.currentPlayback.playbackId,
    castToPlay,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    receivePlaybackCast: (id) => dispatch(receivePlaybackCast(id)),
    togglePlayPause: () => dispatch(togglePlayPause())
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaybackBar);
