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
        <div className="entry">
          <div className="login-register-choice-bar">
            <button id="register-button" type="button"
              onClick={this.handleRegisterSelection.bind(this)}>
              Sign Up
            </button>
            <button id="login-button" type="button"
              onClick={this.handleLoginSelection.bind(this)}>
              Login
            </button>
          </div>
          <div className="register-container">
            <Register/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="entry">
          <div className="login-register-choice-bar">
            <button id="register-button" type="button"
              onClick={this.handleRegisterSelection.bind(this)}>
              Sign Up
            </button>
            <button id="login-button" type="button"
              onClick={this.handleLoginSelection.bind(this)}>
              Login
            </button>
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
