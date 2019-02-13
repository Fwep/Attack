import React from 'react';

class AppNavBar extends React.Component {
  render() {
    let channelName = "Select a channel"

    if (this.props.channel) {
      channelName = this.props.channel.name
    }

    return (
      <span className="app-navbar">
        <h1 className="channel-title-header">#{channelName}</h1>
      </span>
    );
  }
}

export default AppNavBar;