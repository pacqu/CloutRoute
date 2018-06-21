import React, { Component } from 'react';
import './Feed.css';

import WeatherBar from './Weather';
import SubwayArrivals from './SubwayArrivals';
import SubwaySetup from './SubwaySetup';
import axios from "axios";
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

  componentDidMount(){
  axios.get("/subway/allstops")
    .then(res => {
      this.setState({
        allStations: res.data
      })
      console.log(res.data);
    })
  }

  render(){
    console.log(this.state.subways);
    return (
      <div className="feed">
        <div className="header">
          <img id="header-logo" src="clout_route_logo_horizontal.png"/>
        </div>
        <div className="weather-bar">
          <WeatherBar city={this.state.city}/>
        </div>
        <div className="subway-scroll-container">
          <div className="subway-stops-container">
            <div className="subway-stop-widget-container">
              {this.state && this.state.allStations && <SubwaySetup subwayStopsJson={this.state.allStations} />}
            </div>
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
