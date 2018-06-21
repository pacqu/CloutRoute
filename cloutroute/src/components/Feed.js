import React, { Component } from 'react';
import './Feed.css';

import WeatherBar from './Weather';
import SubwayArrivals from './SubwayArrivals';
import SubwaySetup from './SubwaySetup';

class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: this.props.loginInfo.username,
      city: this.props.loginInfo.city,
      routes: this.props.loginInfo.routeJson,
      subways: this.props.loginInfo.subwayStopsJson
    }
  }

  render(){
    return (
      <div className="feed">
        <div className="weather-bar">
          <WeatherBar city={this.state.city}/>
        </div>
        <div className="subway-scroll-container">
          <div className="subway-stops-container">
            <div className="subway-stop-widget-container"></div>
            <div className="subway-stop-widget-container"></div>
            <div className="subway-stop-widget-container"></div>
            <div className="subway-stop-widget-container"></div>
          </div>
        </div>
        <div className="routes-container">
          <div className="route-widget-container"></div>
          <div className="route-widget-container"></div>
          <div className="route-widget-container"></div>
          <div className="route-widget-container"></div>
        </div>
      </div>
    )
  }

}

export default Feed;
