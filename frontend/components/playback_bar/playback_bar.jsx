import React from 'react';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
  }

  

  handlePlay() {
    this.audio.play();
  }

  handlePause() {
    this.audio.pause();
  }

  render() {

    return (
      <div className="playback-bar">
        {this.props.displayPlaybackBar
          ? <audio controls
              src={this.props.castToPlay.castAudio}
              ref={this.audio}>
              Your browser does not support this audio element.
            </audio>
          : null
        }
      </div>
    );
  }
}


export default PlaybackBar;
