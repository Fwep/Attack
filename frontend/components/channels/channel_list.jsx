import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  render() {
    const { channels } = this.props;
    const channelItems = channels.map(channel => {
      return (
        <ChannelListItem
          key={channel.id}
          channel={channel} 
        />
      )
    });

    return (
      <div className="channel-list">
        <div className="header-then-create-button">
          <h2>Channels</h2>
          <div className="tooltip">
            <button onClick={() => this.props.openModal('createChannel')}>⊕</button>
            <span className="tooltiptext">Create a channel</span>
          </div>
        </div>
        <ul>
          {channelItems}
        </ul>
      </div>
    )
  }
}

export default ChannelList;
