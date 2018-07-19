import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CastIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playback: false
    };
  }

  togglePlay() {
    this.setState((prevState) => ({
      playback: !prevState.playback
    }));
  }

  render () {
    return (
      <div className="cast-item">
        <div className="cast-image-small">
          {this.props.cast.castImage
            ? <img src={this.props.cast.castImage} />
            : null
          }
        </div>

        <div className="index-play-button" onClick={() => this.togglePlay()}>
          {this.state.playback
            ? <i className="far fa-pause-circle"></i>
            : <i className="far fa-play-circle"></i>
          }

        </div>

        <li className="cast-index-text-info">
          <Link className="cast-index-title"
            to={`/casts/${this.props.cast.id}/`}>{this.props.cast.title}</Link>
          <br />

          <span className="item-el">by</span>
          &nbsp;
          <span className="cast-author">{this.props.cast.castCreator}</span>
        </li>
      </div>
    )
  }
};

export default CastIndexItem;
