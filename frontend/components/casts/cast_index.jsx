import React from 'react';
import CastIndexItem from './cast_index_item';

class CastIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCasts();
  }

  render() {
    const casts = this.props.casts.map((cast) => {
      return <CastIndexItem key={`cast-${cast.id}`} cast={cast} />;
    });

    return (
      <div>
        <h2 className="document-title">Featured</h2>
        <div className="upload-content">
          <ul>
            {casts}
          </ul>
        </div>
      </div>
    );
  }
}

export default CastIndex;
