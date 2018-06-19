import React, { Component } from 'react';
import './Weather.css';

/*
weather is an object from the API call
WeatherBar parses the necessary data to determine
the low and high, and based on the precipitation
indicate which icon should be shown
NEED TO ADD CSS ICONS
*/

const WeatherBar = ({weather}) => {
  if (!weather){
    return <div> Loading...</div>
  }
  const min = (weather.main.temp_min * 1) * 9/5 - 459.67;
  const max = (weather.main.temp_max * 1) * 9/5 - 459.67;
  const precip = weather.weather[0].main;

  return (
    <div className="Weather">
      <div className="Weather-header">
        The icon should be a
        {(precip === 'Clear' || precip ==='Clouds') ?  <div>Sun</div> : <div>Raining or Umbrella</div> }
        The min is {min.toFixed(2)}.
        The max is {max.toFixed(2)}.
      </div>
    </div>

  )
}

export default WeatherBar;
