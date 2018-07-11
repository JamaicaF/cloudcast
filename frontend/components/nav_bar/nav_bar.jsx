import React from 'react';

const NavBar = ({ currentUser, logout, openModal }) => {

  const sessionLinks = () => (
    <nav className="login-signup">
      <button onClick={() => openModal('login')}>Log in</button>
      <button onClick={() => openModal('signup')}>Sign up</button>
    </nav>
  );
  const userAvatar = () => (
    <hgroup className="user-avatar">
      <h2 className="user-name">{currentUser.username}</h2>
      <button onClick={logout}>Log out</button>
    </hgroup>
  );

  return (
    currentUser ?
    userAvatar(currentUser, logout) :
    sessionLinks()
  );
};

export default NavBar;