import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import SplashPage from './splash/splash_page';
import GreetingContainer from './greeting/greeting_container';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from './../util/route_util';

const App = () => (
    <div>
      <header>
        <h1>Header Nav Bar Goes Here</h1>
      </header>
      <Switch>
        <Route path="/" component={SplashPage}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupFormContainer}/>
      </Switch>
    </div>
);

export default App;
