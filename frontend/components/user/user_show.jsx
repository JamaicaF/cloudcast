import React from 'react';
import CastIndexItem from '../casts/cast_index_item';

class UserShow extends React.Component {
  constructor(props) {
    super(props) ;
    this.state = {
      loading: true,
    };
    this.handleEdit = this.handleEdit.bind(this);
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }
  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId).then(() => {
      this.setState({ loading: false });
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push('/settings/profile/');
  }

  togglePlayPause() {
    this.props.receivePlaybackCast(this.props.cast.id);
    this.props.togglePlayPause();
  }

  render () {
    // debugger
    const userCastsRev = this.props.user.castIds.reverse();
    const userCastFeed = userCastsRev.map((cast) => {
      return <CastIndexItem key={`cast-${cast.id}`}
        cast={cast}
        currentPlayback={this.props.currentPlayback}
        receivePlaybackCast={this.props.receivePlaybackCast}
        togglePlayPause={this.props.togglePlayPause}
        />;
    })

    if (this.state.loading) return <div />;

    return (
      <div className="show-content">
        <div className="user-page-header">
        </div>

        <div className="user-page-body">
          <div className="user-page-title">
            <h2 className="document-title">{this.props.user.username}</h2>
          </div>
          {(this.props.user.id === this.props.currentUser
          ) ? (
            <div className="user-actions">
              <span className="cast-action-title"
                onClick={this.handleEdit}>Edit Profile</span>
            </div>
          ) : null}
        </div>

        <h2 className="document-title">Shows</h2>
        <div className="upload-content">
          <ul>
            {userCastFeed}
          </ul>
        </div>
      </div>
    )
  }
}

export default UserShow;
