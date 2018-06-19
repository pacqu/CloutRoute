import React, { Component } from 'react';


const WeatherBar = ({weather}) => {
  if (!weather){
    return <div> Loading...</div>
  }
  const min = (weather.temp_min * 1) * 9/5 - 459.67;
  const max = (weather.temp_max * 1) * 9/5 - 459.67;
  return (
    <div>
      The min is {min.toFixed(2)}.
      The max is {max.toFixed(2)}.
    </div>

  )
}

export default WeatherBar;
