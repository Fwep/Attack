import React from "react";
import MessageListItem from '../messages/message_list_item';
import MessageFormContainer from  '../messages/message_form_container';

class ChatRoom extends React.Component {
  componentDidMount() {
    const { 
      fetchMessages, 
      createSubscription, 
      channelId,
      receiveMessage
    } = this.props;

    fetchMessages(channelId);
    createSubscription(channelId, receiveMessage);
  }
  
  componentDidUpdate(prevProps) { 
  // Don't use ComponentWillReceiveProps, it's dangerous and deprecated in React 17
    if (prevProps.channelId !== this.props.channelId) {
      this.props.fetchMessages(this.props.channelId);
    }
  }
  
  render() {
    let messageList = Object.values(this.props.messages).map(message => (
      <MessageListItem key={message.id} message={message}/>));

    return (
      <div className="chat-room-container">
        <ul>
          {messageList}
        </ul>
        <MessageFormContainer />
      </div>
    );
  }
}

export default ChatRoom;