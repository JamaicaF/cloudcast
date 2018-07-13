import React from 'react';
import CastIndexItem from './cast_index_item';

class CastIndex extends React.Component {

  componentDidMount() {
    this.props.fetchCasts();
  }

  render() {
    const casts = this.props.casts.map((cast) => {
      return <CastIndexItem key={cast.id} cast={cast} />;
    });

    return (
      <div>
        <h2>Featured</h2>
        <ul>
          {casts}
        </ul>
      </div>
    );
  }
}

export default CastIndex;
