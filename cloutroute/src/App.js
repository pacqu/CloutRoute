import React, { Component } from 'react';
import './App.css';
import WeatherBar from './components/Weather';
import axios from "axios";
// import ReactWeather from 'react-open-weather';
// import 'react-open-weather/lib/css/ReactWeather.css';

const WEATHER_API_KEY = 'cfd81373d0a942ac745fc27d11206173';

const country = ",us"
const city = "Port Chester"

let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + city + country + "&appid=" + WEATHER_API_KEY;
class App extends Component {
  constructor(){
    super();
    this.state = {};
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
  }

  render() {
   const weather = this.state.weather;
    return (
      <div className="App">
        <WeatherBar weather={weather} />
      </div>
    );
  }
}

export default App;
