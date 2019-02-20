import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = ({currentUser, logout}) => {
  const sessionFormBlock = currentUser ?  (
    <ul className="splash-navbar-right">
      <li>
        <p>Hello, {currentUser.username}</p>
      </li>

      <li>
        <button onClick={logout} className="logoutbutton">Log out</button>
      </li>
    </ul>
  ) : (
    <ul className="splash-navbar-right">
      <li>
        <Link to="/signin">Sign in</Link>
      </li>

      <li>
        <Link to="/signup" className="form__sign-up">Get Started</Link>
      </li>
    </ul>
  )

  return (
    <div className="splash-navbar">
      <ul className="splash-navbar-left">
        <li>
          <Link to="/">
            <img src={window.favicon} alt="attackfavicon"/>
          </Link>
        </li>

        <li>
          <a href="https://www.github.com/Fwep">
            <img src={window.octocat} alt="Github" title="Github"/>
          </a>
        </li>

        <li>
          <a href="https://www.linkedin.com/in/tarancacacho">
            <img src={window.linkedin} alt="LinkedIn" title="LinkedIn"/>
          </a>
        </li>
      </ul>

      {sessionFormBlock}
    </div>
  );
}

export default NavBar;
