import React from 'react';
import { Link } from 'react-router-dom';

class UserProfileForm extends React.Component {

  constructor(props){
    super(props);
    this.state = this.props.post;
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    return (
      <div>
        <h2>Your profile settings</h2>
        <Link>Visit your profile</Link>
        <form onSubmit={this.handleSubmit}>

          <label><strong>Display name</strong>
            Spaces and special characters are fine.
            <input type="text"
              />
          </label>

          <label><strong>Biography</strong>
            Up to 1,000 characters.
            <input type="text"
              placeholder="Enter some more info about you"
              />
          </label>

          <label><strong>Country and city</strong>
            Where are you from?
            <input  />
          </label>

          <label><strong>Profile Picture</strong>
            JPEG, GIF or PNG, 10MB max.
            <button>Choose file</button>
          </label>

          <label><strong>Cover Picture</strong>
            Must be at least 1460px wide and 370px tall.
            Avoid using text within your cover image, as
            it could be cropped on smaller screens.
            <button>Choose file</button>
          </label>

          <button>Save Profile Settings</button>
        </form>
      </div>
    );
  }
}

export default UserProfileForm;
