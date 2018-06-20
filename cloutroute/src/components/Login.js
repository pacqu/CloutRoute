import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

     // called when user submits login info
     // sends request to user and waits for response
     handleSubmitLoginInfo(event){
          console.log("Username: " + this.refs.username_entry.value);
          console.log("Password: " + this.refs.password_entry.value);
     }

     render() {
          return (
               <div className="login">
                    <div className="input-container">
                         <div className="username-input-container">
                              <input className="input-entry-text" ref="username_entry" id="username_entry" type="text"/>
                         </div>
                         <div className="password-input-container">
                              <input className="input-entry-text" ref="password_entry" id="password_entry" type="password"/>
                         </div>
                         <div className="submit-button-container">
                              <button id="submit-button" type="button"
                                   onClick={this.handleSubmitLoginInfo.bind(this)}>
                                   Log In
                              </button>
                         </div>
                    </div>
               </div>
          );
     }

}

export default Login;
