import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SplashContainer from './splash/splash_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Main from './main/main'

const App = () => (
    <>
      <AuthRoute exact path="/signin" component={LoginFormContainer}/>
      <AuthRoute exact path="/signup" component={SignupFormContainer}/>
      <Switch>
        <ProtectedRoute path="/channels/:channelId" component={Main} />
        <ProtectedRoute path="/channels" component={Main} />
      </Switch>
      <Route exact path="/" component={SplashContainer}/>
    </>
);

export default App;
