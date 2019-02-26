import React from 'react';
import { Link } from 'react-router-dom';

class SplashForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.location.state = {username: this.state.username}
      .then(this.props.history.push("/signup"));
  }

  render() {
      return (
        <div className="splash-signup">
          <title>Where saving the world happens | Attack</title>
          <form onSubmit={this.handleSubmit} className="login">
            <div className="login-form">
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className={'login-username signup'}
                placeholder="username"
              />

              <Link to={{pathname: "/signup", state: {username: this.state.username}}}
              className="form__sign-up form__sign-up:hover">Get Started</Link>
            </div>

            <p>Already using Attack? <Link className="signin-link" to="/signin">Sign in</Link>.</p>

          </form>
        </div>
      );
    }
}

export default SplashForm;
