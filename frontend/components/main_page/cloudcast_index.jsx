import React from 'react';
import CloudcastIndexItem from './cloudcast_index_item';

class CloudcastIndex extends React.Component {

  componentDidMount() {

  }

  render() {
    // const cloudcasts = this.props.cloudcasts.map((cloudcast) => {
    //   return <CloudcastIndexItem
    //     key={cloudcast.id}
    //     cloudcast={cloudcast}
    //   />;
    // });

    return (
      <div>
        <h2>Featured</h2>
        <ul>
        </ul>
      </div>
    );
  }
}

export default CloudcastIndex;
