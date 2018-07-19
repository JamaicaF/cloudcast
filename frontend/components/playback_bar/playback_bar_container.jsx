import { connect } from 'react-redux';

import PlaybackBar from './playback_bar';

const mapStateToProps = state => {
  if (state.ui.currentPlayback.id) {
    return {
      castToPlay: state.entities.casts[state.ui.currentPlayback.id]
    };
  } else {
    return {};
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id))
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(PlaybackBar);
