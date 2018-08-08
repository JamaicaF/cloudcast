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
    this.props.fetchCasts().then(()  => {
      this.props.fetchUser(this.props.match.params.userId).then(() => {
        this.setState({ loading: false });
      });
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
    const userCastFeed = this.props.casts.map((cast) => {
      return <CastIndexItem key={`cast-${cast.id}`}
        cast={cast}
        user={this.props.user}
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

        <div className="user-page-content">
          <div className="user-show-avatar">
            <img src={this.props.user.profileImage} />

            <div className="user-username">{this.props.user.username}</div>
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
        <div className="user-page-body">
          <div className="user-show-index">
            <ul>
              {userCastFeed}
            </ul>
          </div>

          <div className="user-bio">

            <div className="user-location">
              {(this.props.user.city
              ) ? (
                <i className="fas fa-map-marker-alt"></i>
              ) : null}&nbsp;{this.props.user.city}
              </div>
            <br />

            <div className="item-el">{this.props.user.bio}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserShow;
