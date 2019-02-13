import React from 'react';
import ChannelListContainer from '../channels/channel_list_container';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }
  
  render() {
    return (
      <div className="sidebar">
        <div className="team_menu_user">
          <button id="workspace-name" onClick={() => this.props.history.push('/')}><h2>Attack</h2></button>
          <p>{this.props.currentUser.username}</p>
          <button onClick={() => this.props.logOut()}>Log Out</button>
        </div>

        <div className="sidebar-box">
          <ChannelListContainer/>
        </div>
    </div>
    );
  }
}

export default Sidebar;