import React from 'react';
import { Link } from 'react-router-dom';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    let splashEmail = props.location.state ? props.location.state.email : ""
    this.state = {
      username: '',
      email: splashEmail,
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this);
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
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push('/channels'));
  }

  renderErrors() {
    return(
      <ul className="errors">
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
        <div className="signup-master-div">
          <title>Sign Up | Attack</title>
          <Link to="/">
            <img src={window.favicon} alt="attackfavicon" />
          </Link>
          <div className="modal">
            <h1>Join the Attack community</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <div>
                  <input
                    type="text"
                    value={this.state.email}
                    onChange={this.update("email")}
                    placeholder="email"
                  />
              </div>

              <div>
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update("username")}
                    placeholder="username"
                  />
              </div>

              <div>
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}
                    placeholder="password"
                  />
                <p>
                  Passwords must be at least 6 characters, and shouldn't
                  be things like "password", "123456", or "abcdef".
                </p>
              </div>

              <input type="submit" value="Submit" className="submit" />
            </form>
          </div>
        </div>
      );
    }
}

export default SignupForm;