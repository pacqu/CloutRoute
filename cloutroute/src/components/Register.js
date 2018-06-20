import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

     // called when user submits registration
     // sends request to user and waits for response
     handleSubmitLoginInfo(event){
          console.log("Username: " + this.refs.username_entry.value);
          console.log("Password: " + this.refs.password_entry.value);
          console.log("City: " + this.refs.city_entry.value);
     }

     render() {
          return (
               <div className="register">
                    <div className="input-container">
                         <div className="username-input-container">
                              <input className="input-entry-text" placeholder="username" ref="username_entry" id="username_entry" type="text"/>
                         </div>
                         <div className="password-input-container">
                              <input className="input-entry-text" placeholder="password" ref="password_entry" id="password_entry" type="password"/>
                         </div>
                         <div className="city-input-container">
                              <input className="input-entry-text" placeholder="city" ref="city_entry" id="city_entry" type="text"/>
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
