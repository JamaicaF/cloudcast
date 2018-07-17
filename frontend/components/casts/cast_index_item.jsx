import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CastIndexItem = props => (
  <div className="cast-item">
    <div className="cast-image-small">
      {props.cast.castImage
        ? <img src={props.cast.castImage} />
        : null
      }
    </div>

    <li className="cast-text-info">
      <Link className="cast-title"
        to={`/casts/${props.cast.id}/`}>{props.cast.title}</Link>
      <br />

      <span className="item-el">by</span>
      &nbsp;
      <span className="cast-author">{props.user.username}</span>
    </li>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const user = state.entities.users[ownProps.cast.userId];
  return {
    user,
  }
}

export default connect(mapStateToProps)(CastIndexItem);
