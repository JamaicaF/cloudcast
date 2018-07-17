import { connect } from 'react-redux';
import CastShow from './cast_show';
import { fetchCast } from '../../actions/cast_actions';

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.casts[ownProps.match.params.cast.id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CastShow);
