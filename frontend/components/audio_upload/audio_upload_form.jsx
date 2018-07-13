import React from 'react';

class AudioUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cast;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTitleChange = this.handleTitleChange.bind(this);
  }

  handleTitleChange(e) {
    this.setState({
      title:e.target.value
    });
  }

  handleFile(e) {

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


          <input type="text"
            className="login-form-input"
            placeholder="Choose a title for your upload"
            value={this.state.title}
            onChange={this.handleTitleChange}
            />
          <br/>

          <button>Upload</button>
        </form>
      </div>
    )
  }
}

export default AudioUploadForm;

//   <input type="file"
//     className="blue-button"
//     value={"Choose File"}
//     onChange={this.handleFile}
//   />
