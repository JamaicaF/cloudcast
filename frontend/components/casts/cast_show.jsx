import React from 'react';
import { Link } from 'react-router-dom';

class CastShow extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount(){
    this.props.fetchCast(this.props.match.params.castId).then(
      success => this.setState({loading:false})
    );
  }

  render () {
    if (this.state.loading) return <div></div>;

    let image;
    if (this.props.cast.castImage) {
      image = <img src={this.props.cast.castImage} />;
    } else {
      image = null;
    }

    return (
      <div>
        <div className="cast-image-large">

          {this.image()}

        </div>

        <li className="cast-text-info">
          <Link className="cast-title"
            to={`/casts/${this.props.cast.id}/`}>{this.props.cast.title}</Link>
          <br />

          <span className="item-el">by</span>
          &nbsp;
          <span className="cast-author">Username</span>
        </li>
      </div>
    );
  }
}

export default CastShow;
