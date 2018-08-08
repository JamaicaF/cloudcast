import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import DropdownMenu from './dropdown_menu'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.displayUserProfile = this.displayUserProfile.bind(this);
    this.updateUserSettings = this.updateUserSettings.bind(this);
    this.switchAccount = this.switchAccount.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
  }

  renderNavOptions() {
    return(
      <div>
        <div className="logo-content">
          <NavLink className="logo" to="/">
            <img className="logo-image" src={window.cloudLogo} />
            Cloudcast</NavLink>
        </div>
        <NavLink className="nav-link" to="/upload/">UPLOAD</NavLink>
        <NavLink className="nav-link" to="/discover/">DISCOVER</NavLink>
      </div>
    )
  }

  renderSessionLinks() {
    return(
      <nav className="nav-start-session">

        <span className="span-input login-text"
          onClick={() => this.props.openModal('login')}>Log in</span>

        <span className="nav-el">or</span>

        <button className="blue-button"
          onClick={() => this.props.openModal('signup')}>Sign up</button>
      </nav>
    );
  }

  renderUserAvatar() {
    return(
      <nav className="user-avatar">
        <img src={this.props.currentUser.profileImage} />
        <span className="user-name">{this.props.currentUser.username}</span>

        <DropdownMenu
          displayUserProfile={this.displayUserProfile}
          updateUserSettings={this.updateUserSettings}
          switchAccount={this.switchAccount}
          logout={this.handleLogout}
          />
      </nav>
    )
  }

  displayUserProfile() {
    this.props.history.push(`/users/${this.props.currentUser.id}`)
  }

  updateUserSettings() {
    this.props.history.push('/settings/profile/')
  }

  switchAccount() {
    this.props.logout().then(() => this.props.openModal('login'))
  }

  handleLogout() {
    this.props.logout().then(() => this.props.history.push('/'))
  }

  render() {
    return (
      <div className="nav-bar">
        {this.renderNavOptions()}
        {(this.props.currentUser.id) ?
          (this.renderUserAvatar(this.props.currentUser, this.props.logout)) :
          (this.renderSessionLinks())}
      </div>
    );
  }
};

export default NavBar;
