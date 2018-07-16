import React from 'react';
import { Link } from 'react-router-dom';

class CastEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.cast;
    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.errorClear();
    this.props.fetchCast(this.props.match.params.cast.id);
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
    if (this.state.castFile) {
      formData.append('cast[cast_image]', this.state.castFile);
    }
    this.props.updateCast(formData);
  }

  render() {
    return(
      <div>
        <h2 className="document-title">Uploading {this.state.title}</h2>

        <h3 className="content-message">This upload is not public -
          click the Publish button to publish it</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="cast-image"></div>

          <input type="text"
            className="form-input"
            value={this.state.title}
            onChange={this.handleTitleChange}
            />
          <br/>

          <input type="text"
            placeholder="Description"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            />
          <br/>

            // canceling submit redirects to user show page if audio has uploaded
            // or to audio upload form if upload is still in progress
            <Link>Cancel</Link>
            <button className="green-button"
              onClick={this.handleSubmit}>Publish</button>
        </form>

      </div>
    );
  }
}

export default CastEditForm;
