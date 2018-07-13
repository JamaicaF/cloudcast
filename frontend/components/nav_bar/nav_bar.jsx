import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = ({ currentUser, logout, openModal }) => {
  const sessionLinks = () => (
    <nav className="nav-start-session">
      <span className="span-input"
        onClick={() => openModal('login')}>Log in</span>

      <span className="nav-el">
        or
      </span>

      <button className="blue-button"
        onClick={() => openModal('signup')}>Sign up</button>
    </nav>
  );

  const userAvatar = () => (
    <nav className="user-avatar">
      <h2 className="user-name">{currentUser.username}</h2>

      <button className="blue-button"
        onClick={logout}>Log out</button>
    </nav>
  );

  const renderNavOptions = () => (
    <div>
      <NavLink className="logo" to="/">Cloudcast</NavLink>
      <NavLink className="nav-link" to="/upload/">UPLOAD</NavLink>
      <NavLink className="nav-link" to="/discover/">DISCOVER</NavLink>
    </div>
  );

  return (
    <div className="nav-bar">
      {renderNavOptions()}
      {currentUser ? userAvatar(currentUser, logout) : sessionLinks()}
    </div>
  );
};

export default NavBar;
