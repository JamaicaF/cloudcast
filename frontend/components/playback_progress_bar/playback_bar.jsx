import React from 'react';

class PlaybackBar extends React.Component {
  constructor(props) {
    super(props);

  }

render() {
  return (
      <div className="playback-bar">
        <audio controls>
          <source src={``} type="audio/mpeg">
        </audio>
      </div>
    );
  }
}




export default PlaybackBar;
