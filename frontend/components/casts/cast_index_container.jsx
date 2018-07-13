import { connect } from 'react-redux';
import CastIndex from './cast_index';
import { fetchCasts } from '../../actions/cast_actions';

const mapStateToProps = state => {
  return {
    casts: Objects.values(state.casts)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCasts: () => {
      return dispatch(fetchCasts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastIndex);
