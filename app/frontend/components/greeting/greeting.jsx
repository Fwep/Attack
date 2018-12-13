import React from 'react';
import { Link } from 'react-router-dom'
import GreetingBody from './greeting_body';

const Greeting = ({currentUser, logout}) => {
  // const personalGreeting = () => (
  //   <header>
  //     <h2>Welcome back, {currentUser.username}!</h2>
  //     <button className="header-button" onClick={logout}>Log Out</button>
  //   </header>
  // );
  //
  // const sessionLinks = () => (
  //   <nav className="login-signup">
  //   <Link to="/login">Login</Link>
  //   &nbsp;or&nbsp;
  //   <Link to="/signup">Sign up!</Link>
  //   </nav>
  // );


    return (
      <GreetingBody />
    );
  };

export default Greeting;
