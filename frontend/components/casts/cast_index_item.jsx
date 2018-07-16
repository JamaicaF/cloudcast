import React from 'react';
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
      <span className="cast-author">Username</span>
      <button></button>
    </li>
  </div>
);

export default CastIndexItem;
