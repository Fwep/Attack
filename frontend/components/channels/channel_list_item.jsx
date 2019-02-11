import React from 'react';
import { Link } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Link to={`/channels/${this.props.channel.id}`}>
          # {this.props.channel.name}
        </Link>
        <br />
      </div>
    )
  }
}

export default ChannelListItem;
