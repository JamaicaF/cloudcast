import React from 'react';
import { Link } from 'react-router-dom';

class AudioSubmissionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cast;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render() {
    return(
      <div>
        <h2>
          Uploading {this.state.cast}
        </h2>
        <form onSubmit={this.handleSubmit}>
          <input type="text"
            value={this.state.title}
            />

            <input type="text"
              placeholder="Description"
              value={this.state.title}
              />
            // canceling submit redirects
            // to user show page if audio has uploaded
            // or to audio upload form if upload is still in progress?
            <Link>Cancel</Link>
            <button onClick>Publish</button>
        </form>

      </div>
    );
  }
}
