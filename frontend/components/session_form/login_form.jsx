import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  this.handleDemo = this.handleDemo.bind(this);
  }

  componentDidMount() {
    this.props.clear();
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    let { processForm } = this.props
    
    e.preventDefault();
    this.props.processForm(this.state)
      .then(this.props.fetchChannels())
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({username: 'Batman', password: 'TonyStarkSucks'}, () => {
      this.props.processForm(this.state)
        .then(this.props.fetchChannels())
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li className="errors" key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      return (
        <div className="login-master-div">
          <title>Sign in | Attack</title>
          <div className="plainNav">
            <Link to="/">
              <img src={window.favicon} alt="attackfavicon" />
            </Link>
          </div>
          <div className="modal">
            <h1>Sign in to Attack</h1>
            <p>
              Enter your <b>username</b> and <b>password.</b>
            </p>
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <input
                type="text"
                value={this.state.username}
                onChange={this.update("username")}
                placeholder="username"
              />

              <input
                type="password"
                value={this.state.password}
                onChange={this.update("password")}
                placeholder="password"
              />

              <input type="submit" value="Submit" className="submit" />
              <button onClick={this.handleDemo} className="submit">
                Demo Login
              </button>
            </form>
          </div>
        </div>
      );
    }
}

export default LoginForm;
