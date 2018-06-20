import React, { Component } from 'react';
import './Login.css';

class Register extends Component {

     // called when user submits registration
     // sends request to user and waits for response
     handleSubmitLoginInfo(event){
          console.log("Username: " + this.refs.username_entry.value);
          console.log("Password: " + this.refs.password_entry.value);
          console.log("City: " + this.refs.city_entry.value);
          var jsonBody = {
            'username': this.refs.username_entry.value,
            'password': this.refs.password_entry.value,
            'city': this.refs.city_entry.value
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
                         <div className="city-input-container">
                              <input className="input-entry-text" ref="city_entry" id="city_entry" type="text"/>
                         </div>
                         <div className="submit-button-container">
                              <button id="submit-button" type="button"
                                   onClick={this.handleSubmitLoginInfo.bind(this)}>
                                   Register
                              </button>
                         </div>
                    </div>
               </div>
          );
     }

}

export default Register;
