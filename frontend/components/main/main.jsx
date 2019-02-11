import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';

class MessageForm extends React.Component {
  render() {
    return (
      <form>
        <textarea
          placeholder="Message #general"
        />
      </form>
    );
  }
}


class Main extends React.Component {
  render() {
    return (
      <div className="main">
        <header>
          {`#general`}
          <br></br>
          {`10 users`}
        </header>
        <SidebarContainer/>
        <MessageForm/>
      </div>
    );
  }
}

export default Main;