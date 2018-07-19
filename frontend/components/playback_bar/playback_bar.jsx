import React from 'react';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPlaybackBar: false,
      loading: true
    };
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
    this.setState((prevState) => ({
      displayPlaybackBar: !prevState.displayPlaybackBar
    }));
  }

  render() {
    // if (this.state.loading) return <div />;

    return (
      <div className="playback-bar">
        <audio controls
          src=""
          ref={this.audio}>
          Your browser does not support this audio element.
        </audio>
      </div>
    );
  }
}


export default PlaybackBar;
