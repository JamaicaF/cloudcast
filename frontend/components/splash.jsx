import React from 'react';
import { withRouter } from 'react-router-dom';

class Splash extends React.Component {

  handleClick() {
    this.props.history.push('/discover/');
  }

  render() {
    return (
      <div className="splash-page">
        <div>
          <h1 className="splash-title">Re-think Radio</h1>
          <h3 className="splash-tagline">Join your friends & listen to
            the best DJs and radio presenters in the world</h3>
        </div>

        <button className="blue-button"
          onClick={this.handleClick.bind(this)}>Start Listening</button>
        <br />
        <span className="splash-tagline span-input">
          or sign up with your email</span>
      </div>
    );
  }
}

export default withRouter(Splash);
