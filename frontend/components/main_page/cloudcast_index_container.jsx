import { connect } from 'react-redux';
import CloudcastIndex from './cloudcast_index';

const mapStateToProps = state => {
  return {
    // cloudcasts: Object.values(state.cloudcasts)
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CloudcastIndex);
