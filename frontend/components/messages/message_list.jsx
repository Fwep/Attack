import React from 'react';
import MessageListItem from './message_list_item';

class MessageList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let { fetchMessages } = this.props;
    fetchMessages(this.props.match.params.channelId);

    const messageList = document.getElementById("messagelist");
    messageList.scrollTop = messageList.scrollHeight;
  }
  
  componentDidUpdate(prevProps) {
    let { channelId } = this.props.match.params;
    let  prevChannelId = prevProps.match.params.channelId;
    let { fetchMessages } = this.props;
    
    if (channelId != prevChannelId) {
      fetchMessages(channelId)
    };

    const messageList = document.getElementById("messagelist");
    messageList.scrollTop = messageList.scrollHeight;
  }

  render() {
    let { messages } = this.props;
    let messageList = messages.map(message => <MessageListItem key={message.id} message={message} />)
    return (
      <>
      <title>Attack | {this.props.channelName} </title>
      <ul id="messagelist" className="messages">
        {messageList}
      </ul>
      </>
    );
  }
}

export default MessageList;