import React from 'react';

class AppNavBar extends React.Component {
  render() {
    let channelName = "Select a channel"

    if (this.props.channel) {
      channelName = this.props.channel.name
    }

    return (
      <span className="channel-name-description">
        <h1>#{channelName}</h1>
      </span>
    );
  }
}

export default AppNavBar;