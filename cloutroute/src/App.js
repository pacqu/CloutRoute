import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WeatherBar from './components/weather';
import axios from "axios";

const WEATHER_API_KEY = 'cfd81373d0a942ac745fc27d11206173';
const zip = 10573;
const country = ",us"
let weather = "https://api.openweathermap.org/data/2.5/weather?zip=" + zip + country + "&appid=cfd81373d0a942ac745fc27d11206173";

class App extends Component {
  constructor(){
    super();
    this.state = {};
  }

  componentDidMount(){
    console.log("weather", weather);
    axios.get(weather)
    .then(res => {
      this.setState({
        weather:res.data.main
      })
      console.log("response", res)
    });
  }

  render() {
   const weather = this.state.weather;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <WeatherBar weather={weather} />
        </p>
      </div>
    );
  }
}

export default App;
