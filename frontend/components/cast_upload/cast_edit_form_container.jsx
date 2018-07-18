import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchCast, updateCast, deleteCast, errorClear } from '../../actions/cast_actions';
import CastSubmitForm from './cast_submit_form_container';

class CastEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.props.fetchCast(this.props.match.params.castId).then(() => {
      this.setState({loading: false});
    });
  }

  renderErrors() {
    if (this.props.errors.length) {
      return (
        <ul className="render-upload-errors">
          {this.props.errors.map((error,idx) => (
            <li key={`error: ${idx}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  render () {
    if (this.state.loading) {
      return <div />;
    }
    return (
      <div className="upload-form">
        <div className="document-title">
          {<h2>Editing {this.props.cast.title}</h2>}
        </div>

        {this.renderErrors()}

        <CastSubmitForm cast={this.props.cast} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    cast: state.entities.casts[ownProps.match.params.castId],
    errors: state.errors.cast
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCast: (id) => dispatch(fetchCast(id)),
    updateCast: (id, cast) => dispatch(updateCast(id, cast)),
    deleteCast: (id) => dispatch(deleteCast(id)),
    errorClear: () => dispatch(errorClear())
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CastEditForm));
