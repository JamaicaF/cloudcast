import React from 'react';
// import { NavLink } from 'react-router-dom';

class Splash extends React.Component {

  render() {
    return (
      <div className="splash-page">
        <div>
          <h1 className="splash-title">Re-think Radio</h1>
          <h3 className="splash-tagline">Join your friends & listen to
            the best DJs and radio presenters in the world</h3>
        </div>

        <button className="blue-button">Start Listening</button>
        <br />
        <span className="splash-tagline span-input">
          or sign up with your email</span>
      </div>
    );
  }
}

export default Splash;
