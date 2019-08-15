import React from 'react';
import Modal from '../ui/modal';
import AppNavBarContainer from '../nav/app-navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import MessagesContainer from '../messages/messages_container'

class Main extends React.Component {
  render() {
    return (
      <>
        <Modal />
        <div id="main">
          <AppNavBarContainer />
          <SidebarContainer/>
          {/* <ChatRoomContainer />         */}
          <MessagesContainer />
        </div>
      </>
    );
  }
}

export default Main;