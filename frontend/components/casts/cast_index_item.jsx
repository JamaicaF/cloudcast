import React from 'react';
import { Link } from 'react-router-dom';

const CastIndexItem = props => (
  <div>
    <Link to={`/casts/${props.cast.id}`}>{props.cast.title}</Link>
    <button></button>
  </div>
);

export default CastIndexItem;
