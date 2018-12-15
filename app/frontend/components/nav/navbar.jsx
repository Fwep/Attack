import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <li>Why Attack?</li>
      <li>Solutions</li>
      <li>Resources</li>
      <li>Pricing</li>
    </ul>

    <ul>
      <li>
        <Link to="/login">Sign in</Link>
      </li>
      <li>
        <Link to="/signup">Sign Up</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
