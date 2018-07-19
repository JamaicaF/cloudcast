import React from 'react';
import { Link } from 'react-router-dom';
import PlaybackBarContainer from '../playback_bar/playback_bar_container';

class CastShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      playing: false
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentDidMount(){
    this.props.fetchCast(this.props.match.params.castId).then(() => {
      this.setState({loading: false});
    });
  }

  handleEdit(e) {
    e.preventDefault();
    this.props.history.push(`/casts/${this.props.cast.id}/edit/`);
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCast(this.props.cast.id).then(() =>
      this.props.history.push('/'));
  }

  handlePlay() {
    this.setState({ })
  }

  togglePlay() {
    this.setState((prevState) => ({
      playing: !prevState.playing
    }));
  }

  render () {
    if (this.state.loading) return <div />;

    return (
      <div className="show-content">
        <div className="show-page-header">

          <li className="cast-text-info">
            <Link className="cast-show-title"
              to={`/casts/${this.props.cast.id}/`}>{this.props.cast.title}</Link>
            <br />

            <div className="cast-author">
              <span className="item-el">by</span>
              &nbsp;
              <span >{this.props.cast.castCreator}</span>
            </div>
          </li>

          <div className="cast-image-large">
            <img src={this.props.cast.castImage} />
          </div>
        </div>

        <div className="show-page-body">

          {(this.props.cast.userId === this.props.currentUser
          ) ? (
            <div className="cast-creator-actions">
              <span className="cast-action-title"
                onClick={this.handleEdit}>Edit</span>
              <br />

              <span className="cast-action-title"
                onClick={this.handleDelete}>Delete</span>
            </div>
          ) : null}

          <h3>
            {this.props.cast.description}
          </h3>
        </div>
      </div>
    );
  }
}

export default CastShow;

// let image;
// if (this.props.cast.castImage) {
//   image = ;
// } else {
//   image = null;
// }
