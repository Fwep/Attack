import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';
import NavBar from './nav/navbar';
import Splash from './splash/splash';
import SignupFormContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import { AuthRoute } from './../util/route_util';

const App = () => (
    <div>
      <header>
        <Route path ="/" component={NavBar}/>
      </header>
      <Switch>
        <Route path="/" component={Splash}/>
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <Route exact path="/signup" component={SignupFormContainer}/>
      </Switch>
    </div>
);

export default App;
