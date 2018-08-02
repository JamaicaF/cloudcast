import { connect } from 'react-redux';

import { fetchCasts } from '../../actions/cast_actions';
import { receivePlaybackCast, togglePlayPause } from '../../actions/current_playback_actions';
import CastIndex from './cast_index';

const mapStateToProps = state => {
  return {
    casts: Object.values(state.entities.casts),
    users: state.entities.users,
    currentPlayback: state.ui.currentPlayback
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCasts: () => dispatch(fetchCasts()),
    receivePlaybackCast: (id) => dispatch(receivePlaybackCast(id)),
    togglePlayPause: () => dispatch(togglePlayPause())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastIndex);
