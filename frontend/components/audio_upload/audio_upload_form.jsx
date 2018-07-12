import React from 'react';

class AudioUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cloudcast;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    return(
      <div>
        <h2>
          Upload Radio Shows, DJ Mixes & Podcasts
        </h2>
        <form onSubmit={this.handleSubmit}>

          <button onClick></button>

          <input type="text"
            placeholder="Choose a title for your upload"
            value={this.state.title}
            />

          <button onClick></button>
        </form>
      </div>
    )
  }
}

export default AudioUploadForm;
