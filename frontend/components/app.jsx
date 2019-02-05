// React Stuff
import React from 'react';
import {
  Route
} from 'react-router-dom';

// Components
import PlainNavBar from './nav/navbar--plain';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';
import SignupContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/main'

const App = () => (
    <div className="app">
      <AuthRoute exact path="/signin" component={PlainNavBar}/>
      <AuthRoute exact path="/signin" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={PlainNavBar}/>
      <AuthRoute exact path="/signup" component={SignupContainer}/>
      <Route exact path="/" component={NavBarContainer}/>
      <Route exact path="/" component={Splash}/>
      <ProtectedRoute path="/channels" component={Main} />
    </div>
);

export default App;
