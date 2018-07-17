import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const convertToKebabCase = (string) => {
  return string.replace(/\s+/g, '-').toLowerCase();
};

const CastIndexItem = props => (
  <div className="cast-item">
    <div className="cast-image-small">
    </div>

    <li className="cast-text-info">
      <Link className="cast-title"
        to={`/${props.userPathName}/${props.castPathName}/`}>{props.cast.title}</Link>
      <br />

      <span className="item-el">by</span>
      &nbsp;
      <span className="cast-author">{props.user.username}</span>
      <button></button>
    </li>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  debugger
  const userId = ownProps.cast.userId;
  const user = state.entities.users[userId];
  return {
    user,
    userPathName: convertToKebabCase(user.username),
    castPathName: convertToKebabCase(ownProps.cast.title)
  }
}

export default connect(mapStateToProps)(CastIndexItem);
