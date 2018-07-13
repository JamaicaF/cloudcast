import React from 'react';
import { Link } from 'react-router-dom';

const CastIndexItem = props => (
  <div>
    <li>
      <Link to={`/casts/${props.cast.id}`}>{props.cast.title}</Link>
      <button></button>
    </li>
  </div>
);

export default CastIndexItem;
