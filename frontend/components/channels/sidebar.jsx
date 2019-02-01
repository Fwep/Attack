import React from 'react';

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchChannels();
  };


  render() {
    if (this.props.channels.length === 0) {
      return(
        <div>
        </div>
      );
    } else {
      return(
        <div className="sidebar">
          <ul>
            {this.props.channels.map(channel => <li>{channel.name}</li>)}
          </ul>
        </div>
      );
    }
  };
};

export default Sidebar;
