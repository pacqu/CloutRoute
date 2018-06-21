import React, { Component } from 'react';
import './App.css';
import WeatherBar from './components/Weather';
import Entry from './components/Entry';
import Feed from './components/Feed';

import SubwayArrivals from './components/SubwayArrivals';
import SubwaySetup from './components/SubwaySetup';


import axios from "axios";
// import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';

const WEATHER_API_KEY = 'cfd81373d0a942ac745fc27d11206173';
const country = ",us"
const city = "Port Chester"
let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + country + "&appid=" + WEATHER_API_KEY;
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
    console.log("weather", weather);
    axios.get(weather)
    .then(res => {
      this.setState({
        // weather:res.data.main
        weather: res.data
      })
      console.log("response", res)
    });
    axios.get(subwayStations)
    .then(res => {
      this.setState({
        subwayStops: res.data
      })
      console.log(res.data);
    })
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
   const weather = this.state.weather;
   const subwayStops = this.state.subwayStops;
    return (
      <div className="App">
        {!this.state.loggedIn && <Entry loginFunc={this.loginCallback}/>}
        {/*<WeatherBar weather={weather} />*/}
        {this.state.loggedIn && <Feed loginInfo={this.state.loginObject}/>}
      </div>
    );
  }
}

export default App;
