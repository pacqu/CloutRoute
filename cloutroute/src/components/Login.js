import React, { Component } from 'react';
import './Login.css';

class Login extends Component {

     // called when user submits login info
     // sends request to user and waits for response
     handleSubmitLoginInfo(event){
       var jsonBody = {
         'username': this.refs.username_entry.value,
         'password': this.refs.password_entry.value
       };
       console.log(jsonBody);
       fetch('/users/newuser', {
         method: 'POST',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/json',
         },
         body: JSON.stringify(jsonBody)
       }).then((res) => res.json()).then((data) =>  console.log(data));
     }

     render() {
          return (
               <div className="login">
                    <div className="logo-container">
                         <img id="logo-graphic" src="clout_route_logo.png"/>
                    </div>
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
