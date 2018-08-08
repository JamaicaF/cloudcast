import React from 'react';
import { Link } from 'react-router-dom';

class UserEditForm extends React.Component {
  constructor(props){
    super(props);
    const user = Object.assign(
      {},
      {
        bio: "",
        country: "",
        city: "",
        userImgFile: null,
        userImgUrl: null,
        // userCoverImgFile: null,
        // userCoverImgUrl: null,
      },
      this.props.user
    );
    this.state = user;
    this.handleChange = this.handleChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.user.id);
    this.props.errorClear();
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
      this.setState({userImgFile: file, userImgUrl: fileReader.result});
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[bio]', this.state.bio);
    formData.append('user[country]', this.state.country);
    formData.append('user[city]', this.state.city);
    if (this.state.userImgFile) {
      formData.append('user[user_image]', this.state.userImgFile);
    }
    this.props.updateUser(this.state.id, formData).then(() => {
      this.props.history.push(`/users/${this.state.id}`);
    });
  }

  renderErrors() {
    if (this.props.errors.length) {
      return (
        <ul className="render-upload-errors">
          {this.props.errors.map((error,idx) => (
            <li key={`error: ${idx}`}>{error}</li>
          ))}
        </ul>
      )
    }
  }

  render () {
    const preview = this.state.userImgUrl
      ? <img src={this.state.userImgUrl} />
      : null;

    return (
      <div className="user-form-content">
        <div className="document-title">
          <h2>Your profile settings</h2>

          <Link className="visit-profile-link"
            to={`/users/${this.props.user.id}/`}>Visit your profile</Link>
        </div>

        <form className="user-upload-form" onSubmit={this.handleSubmit}>
          <label className="form-field-category">
            <div className="form-field-label">
              <h3 className="bold-text">Display name</h3>
              <h3 className="sub-text">Spaces and special characters are fine.</h3>
            </div>

            <input type="text"
              className="form-input-field user-input-field"
              value={this.state.username}
              onChange={this.handleChange('username')}
              />
            <br/>
          </label>

          <label className="form-field-category">
            <div className="form-field-label">
              <h3 className="bold-text">Biography</h3>
              <h3 className="sub-text">Up to 1,000 characters.</h3>
            </div>

            <textarea
              className="form-input-field user-input-field"
              placeholder="Enter some more info about you"
              value={this.state.bio || ""}
              onChange={this.handleChange('bio')}
              />
          </label>

          <label className="form-field-category">
            <div className="form-field-label">
              <h3 className="bold-text">City</h3>
              <h3 className="sub-text">Where are you from?</h3>
            </div>

            <input type="text"
              className="form-input-field user-input-field"
              placeholder="e.g. London"
              value={this.state.city || ""}
              onChange={this.handleChange('city')}
              />
          </label>

          <label className="form-field-category">
            <div className="form-field-label">
              <h3 className="bold-text">Profile Picture</h3>
              <h3 className="sub-text">JPEG, GIF or PNG, 10MB max.</h3>
            </div>

              <div className="cast-image-large">
                {preview}
                <input type="file"
                  className="file-upload-button"
                  onChange={this.handleFile}
                />
            </div>
          </label>

          {this.renderErrors()}

          <button className="green-button"
            onClick={this.handleSubmit}>Save Profile Settings</button>
        </form>
      </div>
    );
  }
}

export default UserEditForm;


// <label className="form-field-category">
//   <div className="form-field-label">
//     <h3 className="bold-text">Cover Picture</h3>
//     <h3>Must be at least 1460px wide and 370px tall.
//       Avoid using text within your cover image, as
//       it could be cropped on smaller screens.</h3>
//   </div>
//
//   <div className="">
//     <input type="file"
//       className="file-upload-button"
//       onChange={this.handleFile}
//       />
//   </div>
// </label>
