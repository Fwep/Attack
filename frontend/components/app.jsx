// React Stuff
import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  HashRouter
} from 'react-router-dom';

// Components
import PlainNavBar from './nav/navbar--plain';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';
import SignupContainer from './session_form/signup_form_container';
import LoginFormContainer from './session_form/login_form_container';
import SidebarContainer from './channels/sidebar_container';
import ChatRoomContainer from './chat/ChatRoomContainer';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
      <header>
        <Switch>
          <Route exact path="/" component={NavBarContainer}/>
          <Route exact path="/signin" component={PlainNavBar}/>
          <Route exact path="/signup" component={PlainNavBar}/>
        </Switch>
      </header>
      <aside>
        <Route path="/channels" component={SidebarContainer}/>
      </aside>
      <Switch>
        <AuthRoute exact path="/signin" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupContainer}/>
        <Route exact path="/" component={Splash}/>
        <ProtectedRoute exact path="/messages" component={ChatRoomContainer}/>
        <ProtectedRoute exact path="/channels" component={ChatRoomContainer}/>
        <Redirect to="/"/>
      </Switch>
    </div>
);

export default App;
