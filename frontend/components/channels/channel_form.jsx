import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      is_private: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.togglePrivacy = this.togglePrivacy.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field) {
   return (e) => {
     e.preventDefault();
     this.setState({
       [field]: e.target.value
     })
   } 
  }

  togglePrivacy() {
    this.setState((prevState) => ({
      is_private: !prevState.is_private
    }));
  }

  handleSubmit(e) {
    e.preventDefault();
    let { name, description, is_private } = this.state;
    let { createChannel, receiveChannel } = this.props;
    let channel = new FormData();
    channel.append('channel[name]', name);
    channel.append('channel[description]', description);
    channel.append('channel[is_private]', is_private);

    createChannel(channel)
      .then(receiveChannel(channel))
      .then(this.setState({
        name: '',
        description: '',
        is_private: false
      }));

    // Will need to redirect to channel show

  }

  render() {
    return (
      <div className="channel-creation">
        <h1>{!this.state.is_private ? "Create a channel" : "Create a private channel"}</h1>
        <p id="first">Channels are where your fellow heroes communicate. They’re best when organized around a topic — #team-marketing or #battle-budget, for example.</p>
        <form className="channel-creation" onSubmit={this.handleSubmit}>
          <div>
          <label htmlFor="channel-name">Name</label>
          <input
            id="channel-name"
            type="text"
            onChange={this.handleChange('name')}
            placeholder="e.g. war-budget"
            className="text-input"
          />
          </div>

          <div>
            <span>
              <label htmlFor="channel-description">Purpose</label>
              <p id="optional">(optional)</p>
            </span>
            <input
              id="channel-description"
              type="text"
              onChange={this.handleChange('description')}
              className="text-input"
            />
          <p>What's this channel about?</p>
          </div>

          <div className="privacy">
            <label htmlFor="channel-private">Make private</label>
            <label className="switch">
              <input 
                id="channel-private"
                type="checkbox"
                onChange={this.togglePrivacy}
              />
              <span className="slider round"></span>
            </label>
          </div>

          <div id="action-buttons">
            <button onClick={this.props.closeModal}>Cancel</button>
            <button id="create" type="submit">Create</button>
          </div>
        </form>
      </div>
    )
  }
}

export default ChannelForm;