import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CastIndexItem = props => (
  <div className="cast-item">
    <div className="cast-image-small">
    </div>

    <li className="cast-text-info">
      <Link className="cast-title"
        to={`/casts/${props.cast.id}`}>{props.cast.title}</Link>
      <br />

      <span className="item-el">by</span>
      &nbsp;
      <span className="cast-author">{props.user.username}</span>
      <button></button>
    </li>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.cast.userId;
  const user = state.entities.users[userId];

  return {
    user
  }
}

export default connect(mapStateToProps)(CastIndexItem);
