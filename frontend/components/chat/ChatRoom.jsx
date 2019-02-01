import React from "react";
import MessageForm from "./MessageForm";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      user_id: this.props,
      messages: [] 
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    /*
      App.cable.subscription.create takes in 3 arguments:
      1) The channel we create a subscription to: the client only has
      to invoke this function and create a subscription once. Until
      the client unsubscribes, this subscriptiopn to the channel will persist

      2) Received: When the client is subscribed, they will be listening to the 
      channel's stream for any new data. When data is transmitted into the stream
      via the broadcast method called in the backend, this received function
      will be invoked

      3) Speak: This function sends data to the backend. Calling speak here, on
      the frontend, in turn invokes speak on the backend, through the App.cable's
      perform function
    */
    App.cable.subscriptions.create( 
      { channel: "ChannelChannel" },
      { /* When data is transmitted into the stream via the broadcast method
         in the backend, this received function will be invoked */  
        received: data => {
          this.setState({
            messages: this.state.messages.concat(data.message)
          });
        },
        /* This sends data to the backend. Calling #speak here, in the frontend
        calls #speak in the backend, through App.cable#perform */
        speak: function(data) {
          return this.perform("speak", data);
        }
      }
    );

    let channelId = this.props.match.params.channelId
  }

  componentDidUpdate() {
  }

  render() {
    const messageList = this.state.messages.map((message, idx) => {
      return (
        <li key={idx}>
          {message}
          <div ref={this.bottom} />
        </li>
      );
    });
    
    return (
      <div className="chatroom-container">
        <div>Justice League</div>
        <div className="message-list">{messageList}</div>
        <MessageForm />
      </div>
    );
  }
}

export default ChatRoom;
