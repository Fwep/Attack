import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="navbar">
    <ul className="navbar__copy-block">
      <li className="logo">
        <img src="/assets/attackfavicon.png"
        alt="attackfavicon"/>
      </li>
      <li>Why Attack?</li>
      <li>Solutions</li>
      <li><a href="https://www.github.com/Fwep/Attack.git">Resources</a></li>
      <li>Pricing</li>
    </ul>

    <ul className="hamburger-dropdown">
      <li>
        <ul className="navbar__form-block hamburger__ul">
          <li className="form__list-el form__list-el--sign-up">
            <Link to="/signin">Sign in</Link>
          </li>
          <li className="form__list-el form__list-el--sign-up">
            <Link to="/signup" className="form__sign-up ">Get Started</Link>
          </li>
        </ul>
      </li>
    </ul>

    <ul className="navbar__form-block">
      <li className="form__list-el form__list-el--sign-up">
        <Link to="/signin">Sign in</Link>
      </li>
      <li className="form__list-el form__list-el--sign-up">
        <Link to="/signup" className="form__sign-up ">Get Started</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
