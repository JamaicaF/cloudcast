import React from 'react';

import PlaybackBarContainer from './playback_bar_container';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.playback;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   debugger
  //   if (this.state) {
  //     debugger
  //     this.setState(nextProps);
  //     return this.state.playback
  //   }
  // }

  render() {
    debugger
    return (
      <div className="footer">
        <PlaybackBarContainer playback={this.state} />
      </div>
    );
  }
}

export default Footer;
