import React from 'react';

import CastCreateFormContainer from './cast_create_form_container';
import CastEditFormContainer from './cast_edit_form_container';

class CastUpload extends React.Component {
  constructor(props){
    super(props);
    this.state = this.props.cast;
  }

  renderErrors() {
    if (this.props.errors.length) {
      return (
        <ul className="renderErrors">
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
          {this.state.title !== undefined
            ? <h2>Uploading {this.state.title}</h2>
            : <h2>Upload</h2>
          }
        </div>

        {this.renderErrors()}

        {this.state.title !== undefined
          ? <CastEditFormContainer />
          : <CastCreateFormContainer />
        }
      </div>
    );
  }
}

export default CastUpload;
