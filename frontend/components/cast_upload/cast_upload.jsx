import React from 'react';

import CastCreateFormContainer from './cast_create_form_container';
import CastSubmitFormContainer from './cast_submit_form_container';

class CastUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      part: 1
    };
  }

  componentDidMount() {
    this.props.errorClear();
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
    return(
      <div className="upload-form">
        <div className="document-title">
          {this.state.part === 2
            ? <h2>Uploading {this.props.cast.title}</h2>
            : <h2>Upload</h2>
          }
        </div>

        {this.renderErrors()}

        {this.state.part === 2
          ? <CastSubmitFormContainer />
          : <CastCreateFormContainer goToPartTwo={() => this.setState({ part: 2 })} />
        }
      </div>
    );
  }
}

export default CastUpload;
