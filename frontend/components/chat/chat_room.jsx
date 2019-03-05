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
    const messageList = document.getElementById("messagelist");
    messageList.scrollTop = messageList.scrollHeight;
  }
  
  componentDidUpdate(prevProps) { 
  // Don't use ComponentWillReceiveProps, it's dangerous and deprecated in React 17
    const {
      fetchMessages,
      createSubscription,
      channelId,
      receiveMessage
    } = this.props;

    if (prevProps.channelId !== this.props.channelId) {
      fetchMessages(this.props.channelId);
      fetchMessages(channelId);
      createSubscription(channelId, receiveMessage);
    }
    
    const messageList = document.getElementById("messagelist");
    messageList.scrollTop = messageList.scrollHeight;
  }
  
  render() {
    let messageList = Object.values(this.props.messages).map(message => (
      <MessageListItem key={message.id} message={message}/>));

    return (
      <React.Fragment>
        <ul id="messagelist" className="messages">
          {messageList}
        </ul>
        <MessageFormContainer />
      </React.Fragment>
    );
  }
}

export default ChatRoom;