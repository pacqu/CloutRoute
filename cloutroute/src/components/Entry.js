import React, { Component } from 'react';
import './Entry.css';

import Register from './Register.js';
import Login from './Login.js';

class Entry extends Component {

  constructor(){
    super();
    this.state = {
      newuser: false
    };
  }

  handleRegisterSelection(event){
    this.setState({
      newuser: true
    });
  }

  handleLoginSelection(event){
    this.setState({
      newuser: false
    });
  }

  render(){
    if (this.state.newuser){
      return (
        <div className="entry" id="register">
          <div className="login-register-choice-bar">
            <button className="button" id="register-button" type="button"
              onClick={this.handleRegisterSelection.bind(this)}>
              New User
            </button>
            <button className="button" id="login-button" type="button"
              onClick={this.handleLoginSelection.bind(this)}>
              Existing User
            </button>
          </div>
          <div className="logo-container">
            <img id="logo-graphic" src="clout_route_logo.png"/>
          </div>
          <div className="register-container">
            <Register/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="entry" id="login">
          <div className="login-register-choice-bar">
            <button className="button" id="register-button" type="button"
              onClick={this.handleRegisterSelection.bind(this)}>
              New User
            </button>
            <button className="button" id="login-button" type="button"
              onClick={this.handleLoginSelection.bind(this)}>
              Existing User
            </button>
          </div>
          <div className="logo-container">
            <img id="logo-graphic" src="clout_route_logo.png"/>
          </div>
          <div className="login-container">
            <Login/>
          </div>
        </div>
      );
    }
  }

}

export default Entry;
