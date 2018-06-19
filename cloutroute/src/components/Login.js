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
                    <div className="logo-container">
                         <img src="clout_route_logo-01.png"/>
                    </div>
                    <div className="input-container">
                         <div className="username-input-container">
                              <input ref="username_entry" id="username_entry" type="text"/>
                         </div>
                         <div className="password-input-container">
                              <input ref="password_entry" id="password_entry" type="password"/>
                         </div>
                         <div className="submit-button-container">
                              <input id="submit_button" type="button" value="Log In"
                                   onClick={this.handleSubmitLoginInfo.bind(this)}
                              />
                         </div>
                    </div>
               </div>
          );
     }

}

export default Login;
