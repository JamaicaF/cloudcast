import React from 'react';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.audioTag = React.createRef();
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.playback && nextProps.playback) {
      this.setState({ hidden: 'block' });
    }
  }

  componentDidUpdate(oldProps) {
    if (this.props.playback && !oldProps.playback) {
      this.audioTag.current.play();
    }
  }

  bar() {
    if (this.props.displayPlaybackBar) {
      return (
        <audio
          controls
          src={this.props.castToPlay.castAudio}
          ref={this.audioTag}>
            Your browser does not support this audio element.
          </audio>
      );
    }
    return null;
  }

  render() {

    return (
      <div className="playback-bar">
        <audio
          controls
          src={this.props.castToPlay.castAudio}
          ref={this.audioTag}>
            Your browser does not support this audio element.
          </audio>
      </div>
    );
  }
}


export default PlaybackBar;
