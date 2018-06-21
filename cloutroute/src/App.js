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
        subwayStops: res.data
      })
      //console.log(res.data);
    });
  }

  // callback function
  // login passes information back to app upon successful login
  loginCallback = (loginInfo) => {
    this.setState({
      loggedIn: true,
      loginObject: loginInfo
    })
    console.log("Received login data.");
    console.log(loginInfo);
  }

  render() {
   const subwayStops = this.state.subwayStops;
    return (
      <div className="App">
        {!this.state.loggedIn && <Entry loginFunc={this.loginCallback}/>}
        {this.state.loggedIn && <Feed loginInfo={this.state.loginObject}/>}
      </div>
    );
  }
}

export default App;
