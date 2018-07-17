import React from 'react';
import { Link } from 'react-router-dom';

class CastEditForm extends React.Component {
  constructor(props) {
    super(props);
    const cast = Object.assign({}, this.props.cast, {
          description: "",
          castImgFile: null,
          castImgUrl: null
        });
    this.state = cast;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.errorClear();
  }

  handleTitleChange(e) {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange(e) {
    this.setState({description: e.target.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({castImgFile: file, castImgUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('cast[title]', this.state.title);
    formData.append('cast[description]', this.state.description);
    if (this.state.castImgFile) {
      formData.append('cast[cast_image]', this.state.castImgFile);
    }
    this.props.updateCast(this.state.id, formData).then(() => {
      this.props.history.push(`/casts/${this.state.id}`);
    });
  }

  render() {
    const preview = this.state.castImgUrl
      ? <img src={this.state.castImgUrl} />
      : null;

    return(
      <div className="upload-content">
        <h3 className="content-message">This upload is not public -
          click the Publish button to publish it</h3>

        <form className="cast-edit-content" onSubmit={this.handleSubmit}>
          <div className="cast-image-large">
            {preview}
            <input type="file"
              className="file-upload-button"
              onChange={this.handleFile}
            />
          </div>

            <div className="edit-form-body">
              <input type="text"
                className="form-input-field"
                value={this.state.title}
                onChange={this.handleTitleChange}
                />
              <br/>

              <input type="text"
                className="form-input-field"
                placeholder="Description"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
                />
              <br/>

              <div className="upload-form-actions">
                <span className="cancel-submit">Cancel</span>
                <br />

                <button className="green-button"
                  onClick={this.handleSubmit}>Publish</button>
              </div>
          </div>
        </form>
      </div>
    );
  }
}

export default CastEditForm;
