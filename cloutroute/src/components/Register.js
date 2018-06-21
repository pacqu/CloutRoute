import React, { Component } from 'react';
import './Register.css';

class Register extends Component {

     // called when user submits registration
     // sends request to user and waits for response
     handleSubmitRegisterInfo(event){
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
          }).then((res) => res.json()).then((data) => this.props.registerFunc(data));
     }

     render() {
          return (
               <div className="register">
                 <h6>{this.props.message}</h6>
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
                                   onClick={this.handleSubmitRegisterInfo.bind(this)}>
                                   Register
                              </button>
                         </div>
                    </div>
               </div>
          );
     }

}

export default Register;
