import React from 'react';
import { Link } from 'react-router-dom';

import renderAudioLength from '../../util/util_util';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elapsedTime: 0,
      percentPlayed: 0,
    };
    this.audioTag = React.createRef();
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.toggleMuteUnmute = this.toggleMuteUnmute.bind(this);
    this.updateTime = this.updateTime.bind(this);
  }

  componentDidUpdate(oldProps) {
    if (this.props.playback && !oldProps.playback) {
      this.audioTag.current.play();
    } else if (oldProps.playbackId != this.props.playbackId) {
      this.props.togglePlayPause();
    } else if (!this.props.playback && oldProps.playback) {
      this.audioTag.current.pause();
    }
  }

  togglePlayPause() {
    this.props.togglePlayPause();
  }

  toggleMuteUnmute() {
    this.props.toggleMuteUnmute();
  }

  updateTime(e) {
    const elapsedTime = this.audioTag.current.currentTime;
    const duration  = this.audioTag.current.duration;
    const percentPlayed = (elapsedTime / duration) * 100;
    this.setState({
      elapsedTime,
      remainingTime: duration - elapsedTime,
      percentPlayed,
    });
  }

  bar() {
    if (this.props.displayPlaybackBar) {
      return (
        <div className="playback-bar">
          <img src={this.props.castToPlay.castImage} />

          <div className="playback-play-icon" onClick={this.togglePlayPause}>
            {this.props.playback
              ? <i className="fas fa-pause"></i>
              : <i className="fas fa-play"></i>
            }
          </div>

          <div className="playback-cast-text-info">
            <Link className="playback-cast-show-title"
              to={`/casts/${this.props.castToPlay.id}/`}>{this.props.castToPlay.title}</Link>
            <br />

            <div>
              <span className="">by</span>
              &nbsp;
              <Link className="playback-cast-show-creator"
                to={`/users/${this.props.castToPlay.userId}/`}>{this.props.castToPlay.castCreator}</Link>
            </div>
          </div>

          <span className="playback-time-info">{renderAudioLength(this.state.elapsedTime)}</span>

          <div className="progress-bar-container">
            <input type="range" min="1" max="100" value={this.state.percentPlayed || 0}
              className="slider" id="myRange" />
          </div>

          <span className="playback-time-info">- {renderAudioLength(this.state.remainingTime)}</span>

          <div className="playback-volume-icon" onClick={this.toggleMuteUnmute}>
            {this.props.mute
              ? <i class="fas fa-volume-off"></i>
              : <i className="fas fa-volume-up"></i>
            }
          </div>

          <div className="audio-tag">
            <audio
              controls
              preload="auto"
              muted={this.props.mute}
              src={this.props.castToPlay.castAudio}
              ref={this.audioTag}
              onTimeUpdate={this.updateTime}>
                Your browser does not support this audio element.
            </audio>
          </div>
        </div>
      );
    }
    return null;
  }

  render() {
    return (
      <div className="player-height-placeholder">
        {this.bar()}
      </div>
    );
  }
}

export default PlaybackBar;


// <div className="">
//   {this.props.castToPlay.id !== 0
//     ? null
//     : null
//   }
// </div>
