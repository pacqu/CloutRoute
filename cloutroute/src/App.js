import React, { Component } from 'react';
import './App.css';
import WeatherBar from './components/Weather';
import Entry from './components/Entry';
import Feed from './components/Feed';

import SubwayArrivals from './components/SubwayArrivals';
import SubwaySetup from './components/SubwaySetup';


import axios from "axios";

let subwayStations = "/subway/allstops"
class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false
    };
  }

  /* Calls the Weather API and sets state to
  the data object.
  */
  componentDidMount(){
    axios.get(subwayStations)
    .then(res => {
      this.setState({
        subwayStops: res.data,
        message: ""
      })
      //console.log(res.data);
    });
  }

  // callback function
  // login passes information back to app upon successful login
  loginCallback = (loginInfo) => {
    if (loginInfo["login-failure"]){
      this.setState({
        message: "Log-In Failed, Please Try Again :("
      });
    }
    else{
      this.setState({
        loggedIn: true,
        loginObject: loginInfo
      })
      console.log("Received login data.");
      console.log(loginInfo);
    }
  }

  registerCallback = (registerInfo) => {
    if(registerInfo['signup-success']){
      this.setState({
        message: "Register Success!"
      });
    }
    else{
      this.setState({
        message: "Register Failed, Please Try Again :("
      });
    }
  }

  render() {
   const subwayStops = this.state.subwayStops;
    return (
      <div className="App">
        {!this.state.loggedIn && <Entry loginFunc={this.loginCallback} registerFunc={this.registerCallback} message={this.state.message}/>}
        {this.state.loggedIn && <Feed loginInfo={this.state.loginObject}/>}
      </div>
    );
  }
}

export default App;
