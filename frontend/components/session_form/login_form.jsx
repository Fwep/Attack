import React from 'react';

class SignUpForm extends React.Component {
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
    this.props.processForm(user);
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({username: 'Batman', password: 'TonyStarkSucks'}, () => {
      const user = Object.assign({}, this.state);
      this.props.processForm(user);
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
        // /* The main div container for the from */
        <div className="login-master-div">
          <title>Sign in | Attack</title>
          <div className="modal">
            <h1>Sign in to Attack</h1>
            <p>Enter your <b>username</b> and <b>password.</b></p>
            <form onSubmit={this.handleSubmit}>
            {this.renderErrors()}
                <input
                  type="text"
                  value={this.state.username}
                  onChange={this.update('username')}
                  placeholder="username"
                />

                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                  placeholder="password"
                />


              <input type="submit" value="Submit" className="submit"/>
              <button onClick={this.handleDemo} className="submit">Demo Login</button>

            </form>
          </div>
        </div>
      );
    }
}

export default SignUpForm;
