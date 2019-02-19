import React from 'react';
import { NavLink } from 'react-router-dom';

class ChannelListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <React.Fragment>
        <NavLink 
          to={`/channels/${this.props.channel.id}`}
          activeClassName="selected"
        >
          # {this.props.channel.name}
        </NavLink>
        <br />
      </React.Fragment>
    )
  }
}

export default ChannelListItem;
