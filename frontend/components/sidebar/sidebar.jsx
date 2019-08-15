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
          <div id="workspace-name"><h2>Attack</h2></div>
          <p>{this.props.currentUser.username}</p>
          <button onClick={() => this.props.logOut()}>Log Out</button>
        </div>

        <ChannelListContainer/>
    </div>
    );
  }
}

export default Sidebar;