import React, { Component } from 'react';
import axios from "axios";
import ReactWeather from 'react-open-weather';
import './Weather.css';
import './weather-icons-master/css/weather-icons.css';

/*
weather is an object from the API call
WeatherBar parses the necessary data to determine
the low and high, and based on the precipitation
indicate which icon should be shown
NEED TO ADD CSS ICONS
*/


 class WeatherBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      country: ',us',
      city: props.city
    }

  }
  componentDidMount(){
    // console.log("weather", weather);
    const WEATHER_API_KEY = 'cfd81373d0a942ac745fc27d11206173';
    let weather = "https://api.openweathermap.org/data/2.5/weather?q=" + this.state.city + this.state.country+ "&appid=" + WEATHER_API_KEY;
    axios.get(weather)
    .then(res => {
      this.setState({
        weather: res.data
      })
       console.log("response", res)
    });
  }

  render(){
   const weather = (this.state.weather)? this.state.weather : null ;
   const max = (weather)? this.state.weather.main.temp_max : ""
   const min = (weather)? this.state.weather.main.temp_min : ""
   console.log("weather", weather)
    return (
      <div className="Weather">
        <div className="Weather-header">
            Expected Minimum: {((min * 1) * 9/5 - 459.67).toFixed(2)}
            <br />
            Expected Maximum: {((max * 1) * 9/5 - 459.67).toFixed(2)}
            <br />
          {/*  <i className={
              (precip ==='Thunderstorm' || precip === 'Drizzle' || precip==='Snow')?
               "wi wi-umbrella" : "wi wi-forecast-io-clear-day:before"}>
            </i>*/}
          </div>
        </div>
    );
  }
}

export default WeatherBar;
