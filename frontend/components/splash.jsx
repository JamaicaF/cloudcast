import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal } from '../actions/modal_actions';
import { login } from '../actions/session_actions';

class Splash extends React.Component {

  handleClick() {
    this.props.history.push('/discover/');
  }

  demoLogin() {
    const user = {
      username: 'guest',
      password: '123456'
    };

    this.props.demoLogin(user).then(() => {
      this.props.history.push('/upload/');
    });
  }

  render() {
    return (
      <div className="splash-page">
        <div className= "splash-content">
          <h1 className="splash-title">Re-think Radio</h1>
          <br />

          <h3 className="splash-tagline">Join your friends & listen to
            the best DJs and radio presenters in the world</h3>
          <br />

          <div className="splash-buttons">
            <button className="navy-button"
              onClick={this.demoLogin.bind(this)}>Demo Login</button>
            <br />

            <button className="blue-button"
              onClick={this.demoLogin.bind(this)}>Start Listening</button>
            <br />
          </div>

          <span className="splash-tagline span-input"
            onClick={() => this.props.openModal('signup')}>
            or sign up with your email</span>
          <br />

          <div className="splash-three-assets">
            <div className="splash-asset-cell">
              <h2 className="splash-asset-title">RE-DISCOVER RADIO</h2>
              <h3 className="splash-tagline">The largest collection of radio shows,
                Podcasts & DJ mixes</h3>
            </div>

            <div className="splash-asset-cell">
              <h2 className="splash-asset-title">LISTEN ANYWHERE</h2>
              <h3 className="splash-tagline">Get the free Cloudcast mobile app
                in your pocket</h3>
            </div>

            <div className="splash-asset-cell">
              <h2 className="splash-asset-title">UNLIMITED UPLOADS</h2>
              <h3 className="splash-tagline">You're free to upload and listen
                as much as you like</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal)),
    demoLogin: (user) => dispatch(login(user)),
  };
};

const SplashContainer = withRouter(connect(null, mapDispatchToProps)(Splash));
export default SplashContainer;
