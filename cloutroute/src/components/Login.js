import React, { Component } from 'react';
import './Login.css';

class Login extends Component {



     render() {
          return (
               <div className="login">
                    <div className="logo-container">
                         <img src="../../graphics/clout_route_logo-01.png"> </img>
                    </div>
                    <div className="input-container">
                         <div className="username-input-container">
                              <input id="username-entry" type="text"> </input>
                         </div>
                         <div className="password-input-container">
                              <input id="password-entry" type="password"> </input>
                         </div>
                    </div>
               </div>
          );
     }

}

export default Login;
