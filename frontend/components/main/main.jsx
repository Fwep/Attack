import React from 'react';

class Sidebar extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-box">
          <h2>Attack</h2>
          <h2>Batman</h2>
          <button>Log Out</button>
          <button>Edit Profile</button>
        </div>

        <div className="sidebar-box">
          <h3>Channels</h3>
          <ul>
            {['general', 'justiceleague', 'avengers'].map((name, idx) => {
              return <li key={idx}>{`# ${name}`}</li>
            })}
          </ul>
        </div>
      </div>
    );
  }
};

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
        <Sidebar/>
        <MessageForm/>
      </div>
    );
  }
}

export default Main;