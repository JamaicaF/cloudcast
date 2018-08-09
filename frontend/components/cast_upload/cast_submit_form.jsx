import React from 'react';
import { Link } from 'react-router-dom';

class CastSubmitForm extends React.Component {
  constructor(props) {
    super(props);
    const cast = Object.assign(
      {},
      {
        description: "",
        castImgFile: null,
        castImgUrl: null,
      },
      this.props.cast
    );
    this.state = cast;
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.target.value
    });
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
    if (this.state.description){
      formData.append('cast[description]', this.state.description);
    }
    if (this.state.castImgFile) {
      formData.append('cast[cast_image]', this.state.castImgFile);
    }
    this.props.updateCast(this.state.id, formData).then(() => {
      this.props.history.push(`/casts/${this.state.id}`);
    });
  }

  handleDelete(e) {
    e.preventDefault();
    this.props.deleteCast(this.props.cast.id).then(() =>
      this.props.history.push('/'));
  }

  render() {
    const preview = (this.state.castImgUrl
    ) ? (<img src={this.state.castImgUrl} />
    )  : (<img src={this.props.cast.castImage} />);

    return(
      <div className="upload-content">

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
                onChange={this.handleChange('title')}
                />
              <br/>

              <input type="text"
                className="form-input-field"
                placeholder="Description"
                value={this.state.description || ""}
                onChange={this.handleChange('description')}
                />
              <br/>

              <div className="upload-form-actions">
                <span className="cancel-submit"
                  onClick={this.handleDelete}>Delete this upload</span>
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
export default CastSubmitForm;
