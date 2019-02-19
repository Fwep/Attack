import React from 'react';
import SplashSignUpContainer from '../session_form/splash_signup_container';

const GreetingBody = ({currentUser, logout}) => (
  <div className="splash-container">
    <div className="splash">
      <header className="splash__header">
        <h1 className="splash__header__headline">Where Saving the World Happens</h1>
        <p className="splash__header__blurb">
          When your team needs to kick butt, hire a new English butler,
          deploy an AI super-assistant, review a battle plan, finalize
          next year's reparations budget, measure a mutant's vitals,
          or simply plan your next office meeting, and more, Attack has
          you covered.
        </p>
        <SplashSignUpContainer className="signup-form-container"/>
      </header>

      <div className="splash__image--main">
        <img src={window.splashimage} alt="Attack brings all your communication together"/>
      </div>
  </div>
  </div>
);

export default GreetingBody;