import React from 'react';
import SplashSignUpContainer from '../session_form/splash_signup_container';
import NavBarContainer from '../nav/navbar_container';

class SplashBody extends React.Component {
  componentDidMount() {
    if (!!this.props.currentUser) {
      this.props.fetchChannels()
        .then(res => this.props.history.replace(`channels/${res.channels[0].id}`))
    }
  }
  
  render() {
    return (
    <React.Fragment>
      <NavBarContainer/>
      <div className="splash-grid">
          <h1 className="headline">Imagine what you'll conquer together</h1>
  
          <p className="sales-copy">
            Attack is a command center for work, no matter what planet you're saving. 
            It’s a place where communications dispatch, battle plans are made, 
            and intel is always at your fingertips. 
            With Attack, your team is better equipped.
          </p>
  
          <SplashSignUpContainer/>
  
          <img 
          className="splash-image" 
          src={window.splashimage} 
          alt="Attack brings all your communication together"/>
      </div>
    </React.Fragment>
    );
  };
}
;

export default SplashBody;