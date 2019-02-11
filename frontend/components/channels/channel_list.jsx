import React from 'react';
import ChannelListItem from './channel_list_item';

class ChannelList extends React.Component {

  render() {
    console.log(this.props.channels)
    const channels = Object.values(this.props.channels).filter(
      channel => channel.isDirect === false
    );

    const channelItems = channels.map(channel => {
      return <ChannelListItem
        key={channel.id}
        channel={channel} />
    });

    return (
      <div className="channel-list">
        <h2>Channels &#x2295;</h2>
        <ul>
          {channelItems}
        </ul>
      </div>
    )
  }
}

export default ChannelList;
