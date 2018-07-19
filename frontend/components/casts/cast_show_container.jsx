import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCast, deleteCast } from '../../actions/cast_actions';
import { receivePlaybackCast, togglePlayPause } from '../../actions/current_playback_actions';
import CastShow from './cast_show';

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.entities.casts[ownProps.match.params.castId] || {},
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id)),
    deleteCast: (id) => dispatch(deleteCast(id)),
    receivePlaybackCast: (id) => dispatch(receivePlaybackCast(id)),
    togglePlayPause: () => dispatch(togglePlayPause())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastShow));
