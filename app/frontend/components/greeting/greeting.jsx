import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = ({currentUser, logout}) => {
  const PersonalGreeting = () => (
    <header>
      <h2>Welcome back, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </header>
  )
  const sessionLinks = () => (
    <nav className="login-signup">
    <Link to="/signin">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
    </nav>
);

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;