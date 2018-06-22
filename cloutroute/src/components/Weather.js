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
      city: props.city,
      country: ',us'

    }

  }
  componentDidMount(){
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
  /* weather, main, min, precip are set to an empty string
    until the API call is complete, ensuring that the render
    does not fail
  */
  render(){
   const weather = (this.state.weather)? this.state.weather : null ;
   const max = (weather)? this.state.weather.main.temp_max : "";
   const min = (weather)? this.state.weather.main.temp_min : "";
   const precip = (this.state.weather)? this.state.weather.weather[0].main : "";
   console.log("weather", weather)
    return (
      <div className="Weather">
        <div className="Weather-header">
            <p className="temperature-display" id="city">
              {this.state.city}
            </p>
            <p className="temperature-display">
              Low {((min * 1) * 9/5 - 459.67).toFixed(0)}
            </p>
            <p className="temperature-display">
              High {((max * 1) * 9/5 - 459.67).toFixed(0)}
            </p>
            <i className={
              (precip ==='Thunderstorm' || precip === 'Drizzle' || precip==='Snow')?
                "wi wi-umbrella" : "wi wi-wu-mostlysunny"}>
            </i>
          </div>
        </div>
    );
  }
}

export default WeatherBar;
