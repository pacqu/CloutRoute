import React, { Component } from 'react';


const WeatherBar = ({weather}) => {
  if (!weather){
    return <div> Loading...</div>
  }
  const min = (weather.main.temp_min * 1) * 9/5 - 459.67;
  const max = (weather.main.temp_max * 1) * 9/5 - 459.67;
  const percep = weather.weather[0].main;
  return (
    <div>
      Today it is
      {(percep === 'Clear' || percep ==='Clouds') ?  <div>CLEAR</div> : <div>RAINING</div> }
      The min is {min.toFixed(2)}.
      The max is {max.toFixed(2)}.
    </div>

  )
}

export default WeatherBar;
