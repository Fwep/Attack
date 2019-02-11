import React from 'react';
import ChannelListContainer from '../channels/channel_list_container';

class Sidebar extends React.Component {
  componentDidMount() {
    this.props.fetchChannels();
  }
  
  render() {
    return (
      <div className = "sidebar" >
        <div className="sidebar-box">
          <button onClick={() => this.props.history.push('/')}><h2>Attack</h2></button>
          <h2>{this.props.currentUser.username}</h2>
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