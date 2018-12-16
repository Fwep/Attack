import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    };

  this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
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
        <div>
          <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
            <div className="login-form">
                  <input type="text"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-username"
                    placeholder="username"
                  />

                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-password"
                  />
                <br/>

                <input type="submit" value="Get Started"
                className="form__sign-up form__sign-up:hover"/>
            </div>

            <p> Already using Attack? <a href="/login">Sign in</a>.</p>

          </form>
        </div>
      );
    }
}

export default SessionForm;
