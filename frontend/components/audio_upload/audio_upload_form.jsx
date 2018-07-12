import React from 'react';

class AudioUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.);
  }

  render () {
    return(
      <div>
        <form>
          <button></button>
          <input type="text"
            placeholder="Choose a title for your upload"
            value={this.state.title}
            onChange={}
            >
          <button></button>
        </form>
      </div>
    )
  }
}

export default AudioUploadForm;
