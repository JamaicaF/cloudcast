import React from 'react';

class AudioUploadForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cast;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(e) {
    this.setState({title:e.target.value});
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
    const formData = new FormData();
    formData.append('cast[title]', this.state.title);
    if (this.state.castFile) {
      formData.append('cast[castAudio]', this.state.castFile);
    }
    this.props.uploadAudio(this.state).then(
      (response) => console.log(response.test_message),
      (response) => {
        console.log(response.responseJSON)
    });
  }

  render () {
    return(
      <div className="upload-form">
        <h2 className="document-title">Upload</h2>

        <form className="form-body" onSubmit={this.handleSubmit}>
          <input type="file"
            onChange={this.handleFile}
          />

          <div>
            <h3 className="">Please choose an audio file -
              MP3, AAC, M4A, MP4 audio or OGG types are accepted.</h3>
            <br />
            <h3 className="">Mixcloud is for Radio Shows, DJ Mixes & Podcasts.
              Single tracks, mashups & full albums are not permitted</h3>
          </div>

          <input type="text"
            className="form-input"
            placeholder="Choose a title for your upload"
            value={this.state.title}
            onChange={this.handleTitleChange}
            />
          <br/>

          <button className="green-button"
            onClick={this.handleSubmit}>Upload</button>
        </form>
      </div>
    )
  }
}

export default AudioUploadForm;
