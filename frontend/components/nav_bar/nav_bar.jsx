import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';

import DropdownMenu from './dropdown_menu'

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  renderNavOptions() {
    return(
      <div>
        <NavLink className="logo" to="/">Cloudcast</NavLink>
        <NavLink className="nav-link" to="/upload/">UPLOAD</NavLink>
        <NavLink className="nav-link" to="/discover/">DISCOVER</NavLink>
      </div>
    )
  }

  renderSessionLinks() {
    return(
      <nav className="nav-start-session">
        <span className="span-input"
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
        <span className="user-name">{this.props.currentUser.username}</span>

        <DropdownMenu logout={this.handleLogout} />
      </nav>
    )
  }

  handleLogout () {
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
