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
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({castFile: file, castUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = newFormData();
    formData.append('cast[title]', this.state.title);
    if (this.state.castFile) {
      formData.append('cast[castAudio]', this.state.castFile);
    }
    this.props.action(this.state);
  }

  render () {
    return(
      <div>
        <h2>
          Upload
        </h2>

        <form onSubmit={this.handleSubmit}>

          <h3 className="">Please choose an audio file -
            MP3, AAC, M4A, MP4 audio or OGG types are accepted.</h3>
          <br />
          <h3 className="">Mixcloud is for Radio Shows, DJ Mixes & Podcasts.
            Single tracks, mashups & full albums are not permitted</h3>

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
