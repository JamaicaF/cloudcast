import React from 'react';
import { Link } from 'react-router-dom';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.audioTag = React.createRef();
    this.togglePlayPause = this.togglePlayPause.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.playback && nextProps.playback) {
      this.setState({ hidden: 'block' });
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.playback && !oldProps.playback) {
      this.audioTag.current.play();
    } else if (!this.props.playback) {

    }
  }

  togglePlayPause() {
    this.props.togglePlayPause();
  }

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
            <audio
              controls
              preload="auto"
              src={this.props.castToPlay.castAudio}
              ref={this.audioTag}>
                Your browser does not support this audio element.
              </audio>
          </div>

          <div className="playback-volume-icon">
            <i className="fas fa-volume-up"></i>
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
