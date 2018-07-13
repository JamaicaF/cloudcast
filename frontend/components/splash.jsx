import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { openModal } from '../actions/modal_actions';

class Splash extends React.Component {

  handleClick() {
    this.props.history.push('/discover/');
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

          <button className="blue-button"
            onClick={this.handleClick.bind(this)}>Start Listening</button>
          <br />

          <span className="splash-tagline span-input"
            onClick={() => this.props.openModal('signup')}>
            or sign up with your email</span>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openModal: (modal) => dispatch(openModal(modal))
  };
};

const SplashContainer = withRouter(connect(null, mapDispatchToProps)(Splash));
export default SplashContainer;
