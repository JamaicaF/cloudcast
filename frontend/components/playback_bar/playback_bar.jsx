import React from 'react';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);

    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);

  }

  // componentDidMount(){
  //   this.props.fetchCast(this.props.castToPlay).then(() => {
  //     this.setState({loading: false});
  //   });
  // }

  handlePlay() {
    this.audio.play()
  }

  handlePause() {
    this.audio.pause()
  }

  togglePlaybackBar() {
    debugger
    if (displayPlaybackBar === false && playback) {
      return this.setState(() => ({ displayPlaybackBar: true }));
    }
  }

  render() {
    // if (this.state.loading) return <div />;

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
