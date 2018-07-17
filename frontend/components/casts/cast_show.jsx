import React from 'react';

class CastShow extends React.Component {
  componentDidMount(){
    this.props.fetchCast(this.props.match.params.cast.id);
  }

  render () {
    return (
      <div>

      </div>
    );
  }
}

export default CastShow;
