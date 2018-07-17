import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import convertToKebabCase from '../../util/kebab_util';

const CastIndexItem = props => (
  <div className="cast-item">
    <div className="cast-image-small"></div>

    <li className="cast-text-info">
      <Link className="cast-title"
        to={`/${props.userPathName}/${props.castPathName}/`}>{props.cast.title}</Link>
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
    userPathName: convertToKebabCase(user.username),
    castPathName: convertToKebabCase(ownProps.cast.title)
  }
}

export default connect(mapStateToProps)(CastIndexItem);
