import React, { Component } from 'react';
import axios from "axios";
import './Weather.css';
import './weather-icons-master/css/weather-icons.css';

/*
weather is an object from the API call
WeatherBar parses the necessary data to determine
the low and high, and based on the precipitation
indicate which icon should be shown
NEED TO ADD CSS ICONS
*/
const WEATHER_API_KEY = 'cfd81373d0a942ac745fc27d11206173';
class WeatherBar extends Component{
  //the state will contain a weather object returned from API
  constructor(props){
    super(props);
    this.state = {
      city: '',
      country = ',us'
    }
  }
  //BELOW COPIED FROM APP.JS
  let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + this.state.country + "&appid=" + WEATHER_API_KEY;
  componentDidMount(){
    console.log("weather", weather);
    axios.get(weather)
    .then(res => {
      this.setState({
        weather: res.data
      })
      console.log("response", res)
    });
  }


  if (!weather){
    return <div> Loading...</div>
  }
  const min = (weather.main.temp_min * 1) * 9/5 - 459.67;
  const max = (weather.main.temp_max * 1) * 9/5 - 459.67;
  const precip = weather.weather[0].main;
  console.log("inside weather: ",weather);

  return (
    <div className="Weather">
      <div className="Weather-header">
        Expected Minimum: {min.toFixed(2)}
        <br />
        Expected Maximum: {max.toFixed(2)}
        <br />
        <i className={
          (precip ==='Clear' || precip==='Clouds')?
          "wi wi-umbrella" : "wi wi-forecast-io-clear-day:before"}>
        </i>
      </div>
    </div>

  )
}

export default WeatherBar;
