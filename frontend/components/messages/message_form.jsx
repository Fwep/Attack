import React from 'react';

class MessageForm extends React.Component {
  constructor(props) {
    super(props);

    const {currentChannelId, currentUserId} = this.props;
    
    this.state = {
      body: '',
      user_id: currentUserId, 
      channel_id: currentChannelId
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleInput(e) {
    this.setState({
      body: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  handleKeyPress(e) {
    if (e.which === 13 && !e.shiftKey) {
      e.preventDefault(); // Need this so that textarea clears properly after entering message
      App[(this.props.currentChannelId)].speak(this.state)
      this.props.fetchMessages(this.props.currentChannelId)
      this.setState({body: ''});
    }
  }

  render() {
    if (!this.props.currentChannelId) {
      return (<div>Loading...</div>)
    } else {
      return (
      <form 
      onSubmit={(e) => handleSubmit(e)} 
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