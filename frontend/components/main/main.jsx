import React from 'react';
import AppNavBarContainer from '../nav/app-navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';

class MessageForm extends React.Component {
  render() {
    return (
      <form>
        <textarea
          placeholder="Message #general"
        />
      </form>
    );
  }
}


class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <AppNavBarContainer />
        <SidebarContainer/>
        <MessageForm/>
      </div>
    );
  }
}

export default Main;