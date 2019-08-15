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