import React from 'react';
import { receiveMessage } from '../../actions/message_actions';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    const {currentChannelId, currentUserId } = this.props;
    
    this.state = {
      body: '',
      user_id: currentUserId, 
      channel_id: this.props.match.params.channelId
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    let { createACSubscription } = this.props;
    createACSubscription(this.state.channel_id, receiveMessage);
  }

  componentDidUpdate(prevProps) {
    let { channelId } = this.props.match.params;
    let prevChannelId = prevProps.match.params.channelId;
    let { createACSubscription } = this.props;

    if (channelId != prevChannelId) {
      this.setState({channel_id: channelId}, () => {
        App.cable.subscriptions.remove(App[prevChannelId]);
        createACSubscription(channelId, receiveMessage);
      });
    };
  }

  handleInput(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleKeyPress(e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault(); // Need this so that textarea clears properly after entering message
      App[parseInt(this.state.channel_id)].speak(this.state);
      this.setState({ body: '' });
    }
  }

  render() {
    if (!this.props.currentChannelId) {
      return (<div>Loading...</div>)
    } else {
      return (
      <form
      className='message-form-area'>
        <input
        type="text"
        className="message-input"
        onChange={(e) => this.handleInput(e)}
        onKeyPress={(e) => this.handleKeyPress(e)}
        value={this.state.body}
        placeholder="Message" />
      </form>
      );
    }
  }
}

export default MessageForm;