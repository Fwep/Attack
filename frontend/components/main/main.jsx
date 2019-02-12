import React from 'react';
import AppNavBarContainer from '../nav/app-navbar_container';
import SidebarContainer from '../sidebar/sidebar_container';
import ChatRoomContainer from '../chat/chat_room_container';

class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <AppNavBarContainer />
        <SidebarContainer/>
        <ChatRoomContainer />        
      </div>
    );
  }
}

export default Main;