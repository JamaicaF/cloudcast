import React from 'react';

class CastShow extends React.Component {
  componentDidMount(){
    this.props.fetchCast(this.props.match.params.castId);
  }

  render () {
    return (
      <div>
        <div className="cast-image-large">
          {this.props.castImg
            ? <img src={this.props.castImg} />
            : null
          }
        </div>

        <li className="cast-text-info">
          <Link className="cast-title"
            to={`/casts/${this.props.cast.id}/`}>{this.props.cast.title}</Link>
          <br />

          <span className="item-el">by</span>
          &nbsp;
          <span className="cast-author">{this.props.user.username}</span>
        </li>
      </div>
    );
  }
}

export default CastShow;
