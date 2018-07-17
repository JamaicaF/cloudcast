import { connect } from 'react-redux';

import convertToKebabCase from '../../util/kebab_util';
import CastShow from './cast_show';
import { fetchCast } from '../../actions/cast_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.entities.casts[state.ui.currentCast.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastShow);
