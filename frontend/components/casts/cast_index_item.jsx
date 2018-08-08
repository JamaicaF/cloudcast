import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CastIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }

  togglePlayPause() {
    this.props.receivePlaybackCast(this.props.cast.id);
    this.props.togglePlayPause();
  }

  render () {
    const castUserId = this.props.cast.userId;
    const username = this.props.users ? this.props.users[castUserId].username : this.props.user.username;

    return (
      <div className="cast-item">
          {this.props.cast.castImage
            ? <img src={this.props.cast.castImage} />
            : null
          }

        <div className="index-play-button" onClick={this.togglePlayPause}>
          {this.props.currentPlayback.playback &&
            this.props.currentPlayback.playbackId === this.props.cast.id
            ? <i className="far fa-pause-circle"></i>
            : <i className="far fa-play-circle"></i>
          }
        </div>

        <li className="cast-index-text-info">
          <Link className="cast-index-title"
            to={`/casts/${this.props.cast.id}/`}>{this.props.cast.title}</Link>
          <br />

          <span className="item-el">by</span>
          &nbsp;
          <Link className="cast-author"
            to={`/users/${this.props.cast.userId}`}>{username}</Link>
        </li>
      </div>
    )
  }
};

export default CastIndexItem;
