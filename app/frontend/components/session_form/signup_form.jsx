import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      password: '',
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  // /* This method will handle real-time updating of our user inputs */
  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  // /* This method will handle submission of our form */
  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
  // /* .then(() => this.props.history.push('messages')); */
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={`error-${idx}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
      return (
        // /* The main div container for the from */
        <div className="signup-master-div">
        <title>Sign Up | Attack</title>
          <div className="modal">
            <h1>Join the Attack community</h1>
            <form onSubmit={this.handleSubmit}>
              {this.renderErrors()}
              <div>
                <label>Email
                  <input
                  type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                  placeholder="email"
                  />
                </label>
              </div>

              <div>
                <label>Username
                  <input
                    type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    placeholder="username"
                  />
                </label>
              </div>


              <div>
                <label>Password (required)
                  <input
                    type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    placeholder="password"
                  />
                </label>
                <p>
                  Passwords must be at least 6 characters, and shouldn't
                  be things like "password", "123456", or "abcdef".
                </p>
              </div>


              <input type="submit" value="Submit" className="submit"/>

            </form>
          </div>
        </div>
      );
    }
}

export default SignUpForm;
