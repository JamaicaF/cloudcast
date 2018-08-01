import React from 'react';
import CastIndexItem from './cast_index_item';

class CastIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCasts();
  }

  render() {
    const castsRev = this.props.casts.reverse();
    const castFeed = castsRev.map((cast) => {
      return <CastIndexItem key={`cast-${cast.id}`}
        cast={cast}
        currentPlayback={this.props.currentPlayback}
        receivePlaybackCast={this.props.receivePlaybackCast}
        togglePlayPause={this.props.togglePlayPause}
        />;
    });

    return (
      <div>
        <h2 className="document-title">Featured</h2>
        <div className="upload-content">
          <ul>
            {castFeed}
          </ul>
        </div>
      </div>
    );
  }
}

export default CastIndex;
