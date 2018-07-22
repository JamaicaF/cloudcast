import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchUser } from '../../actions/user_actions';
import { receivePlaybackCast, togglePlayPause } from '../../actions/current_playback_actions';
import UserShow from './user_show';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.entities.users[ownProps.match.params.userId] || {},
    currentUser: state.session.id,
    currentPlayback: state.ui.currentPlayback
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserShow));
