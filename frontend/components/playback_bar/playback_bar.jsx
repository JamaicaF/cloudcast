import React from 'react';
import { Link } from 'react-router-dom';

import renderAudioLength from '../../util/util_util';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.audioTag = React.createRef();
    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.toggleMuteUnmute = this.toggleMuteUnmute.bind(this);
    // this.renderAudioLength = this.renderAudioLength.bind(this);
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

  // renderAudioLength() {
  //   renderAudioLength(this.audioTag.current.duration)
  // }

  bar() {
    if (this.props.displayPlaybackBar) {
      return (
        <div className="playback-bar">
          <div className="cast-img-playback">
            <img src={this.props.castToPlay.castImage} />
          </div>

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

            <div className="playback-cast-show-creator">
              <span className="">by</span>
              &nbsp;
              <span>{this.props.castToPlay.castCreator}</span>
            </div>
          </div>

          <div className="progress-bar-container">
            <input type="range" min="1" max="100" className="slider" id="myRange" />
          </div>

          <div className="">
            {this.props.castToPlay.id !== 0
              ? null
              : null
            }
          </div>

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
              ref={this.audioTag}>
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
