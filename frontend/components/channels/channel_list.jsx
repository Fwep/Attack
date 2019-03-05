import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {
  render() {
    const { channels } = this.props;
    const channelItems = channels.map(channel => {
      return <ChannelListItem
        key={channel.id}
        channel={channel} />
    });

    return (
      <div className="channel-list">
        <h2>Channels</h2>
        <ul>
          {channelItems}
        </ul>
      </div>
    )
  }
}

export default ChannelList;
