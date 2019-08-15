import React from 'react';
import MessageListItem from './message_list_item';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { fetchMessages } = this.props;
    fetchMessages(this.props.match.params.channelId);
  }
  
  componentDidUpdate(prevProps) {
    let { channelId } = this.props.match.params;
    let  prevChannelId = prevProps.match.params.channelId;
    let { fetchMessages } = this.props;

    console.log("ChannelId", channelId);
    console.log("Previous Channel Id", prevChannelId);
    
    if (channelId != prevChannelId) {
      fetchMessages(channelId)
    };
  }

  render() {
    let { messages } = this.props;
    let messageList = messages.map(message => <MessageListItem key={message.id} message={message} />)
    return (
      <ul>
        {messageList}
      </ul>
    );
  }
}

export default MessageList;