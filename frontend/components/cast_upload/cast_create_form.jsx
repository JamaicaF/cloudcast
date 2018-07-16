import React from 'react';

class CastCreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      castFile: null,
      castUrl: null
    };
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.errorClear();
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
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
      formData.append('cast[cast_audio]', this.state.castFile);
    }
    this.props.createCast(formData).then(this.props.goToPartTwo);
  }

  render () {
    return(
      <div className="upload-content">
        <div className="upload-three-assets">
          <div className="upload-asset-cell">
            <h2 className="upload-asset-title">UNLIMITED UPLOADS</h2>
          </div>

          <div className="upload-asset-cell">
            <h2 className="upload-asset-title">ARTISTS RECEIVE ROYALTIES</h2>
          </div>

          <div className="upload-asset-cell">
            <h2 className="upload-asset-title">ADD TRACKLISTS</h2>
          </div>
        </div>

        <form className="form-body" onSubmit={this.handleSubmit}>

          <input type="file"
            className="file-upload-button"
            onChange={this.handleFile}
          />

          <div>
            <h3 className="modal-footer-toggle">Please choose an audio file -
              MP3, AAC, M4A, MP4 audio or OGG types are accepted.</h3>
            <br />
            <h3 className="">Mixcloud is for Radio Shows, DJ Mixes & Podcasts.
              Single tracks, mashups & full albums are not permitted</h3>
          </div>

          <input type="text"
            className="form-input-field"
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

export default CastCreateForm;
