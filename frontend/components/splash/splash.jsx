import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import NavbarContainer from '../nav/navbar_container';

class Splash extends React.Component {
  constructor() {
    super();
    this.state ={
      email: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.preventDefault()
    this.setState({
      email: e.target.value
    });
  }
  
  render() {
    return (
      <div className="splash-container">
        <title>Where heroism happens | Attack</title>
        <NavbarContainer />
        <div className="header-block">
          <div>
            <h1 className="headline">
              Whatever world you save, you can do it in Attack{" "}
            </h1>
          </div>
          <p className="blurb">
            Attack gives your team the power and alignment you need to save
            the world.
          </p>
          <div className="splash-input">
            <input
              type="text"
              value={this.state.email}
              className="splash-input"
              placeholder="Your work email"
              onChange={this.handleChange}
            />
            <Link 
              to={{
                pathname: "signup",
                state: {email: this.state.email}
              }}
              className="splash-submit"
            >
              <p>Try for free</p>
            </Link>
          </div>
          <p className="returning-user-blurb">
            Already using Attack?{" "}
            <Link className="signin-link" to="/signin">
              Sign in
            </Link>
            .
          </p>

          <img id="float1" className="floaty-cw" src={window.aquaman} />
          <img id="float2" className="floaty-ccw" src={window.batman} />
          <img id="float3" className="floaty-ccw" src={window.blackpanther} />
          <img id="float4" className="floaty-ccw" src={window.captainamerica} />
          <img id="float5" className="floaty-ccw" src={window.flash} />
          <img id="float6" className="floaty-cw" src={window.gauntlet} />
          <img id="float7" className="floaty-ccw" src={window.greenlantern} />
          <img id="float8" className="floaty-cw" src={window.hulk} />
          <img id="float9" className="floaty-ccw" src={window.ironman} />
          <img id="float10" className="floaty-cw" src={window.joker} />
          <img id="float11" className="floaty-cw" src={window.spiderman} />
          <img id="float12" className="floaty-cw" src={window.superman} />
          <img id="float13" className="floaty-ccw" src={window.thor} />
          <img id="float14" className="floaty-cw" src={window.venom} />
          <img id="float15" className="floaty-cw" src={window.ww} />
        </div>
      </div>
    );
  }
}

export default Splash;