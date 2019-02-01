import React from 'react';

const PlainNavBar = ({history}) => (
  <div className="navbar navbar--plain">
    <ul className="navbar__copy-block">
      <li className="logo">
        <img onClick={() => history.push('/')} src={window.favicon}
        alt="attackfavicon"/>
      </li>
    </ul>
  </div>
);

export default PlainNavBar;
