import React, { Component } from 'react';
import './Feed.css';

import WeatherBar from './Weather';
import SubwayArrivals from './SubwayArrivals';
import SubwaySetup from './SubwaySetup';
import RouteForm from './RouteForm';
import RouteComp from './RouteComp';
import axios from "axios";
class Feed extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: this.props.loginInfo.username,
      city: this.props.loginInfo.city,
      routes: JSON.parse(this.props.loginInfo.routeJson),
      subways: JSON.parse(this.props.loginInfo.subwayStopsJson)
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

  userUpdateCallback = (updatedUserInfo) => {
    this.setState({
      username: updatedUserInfo.username,
      city: updatedUserInfo.city,
      routes: JSON.parse(updatedUserInfo.routeJson),
      subways: JSON.parse(updatedUserInfo.subwayStopsJson)
    })
  }

  render(){
    let subways = this.state.subways;
    var subwayComponents = [];
    if (subways !== undefined && subways.length !== 0){
      subwayComponents = subways.map((station,i) => (<div className="subway-stop-widget-container"> <SubwayArrivals key={i} stationId={station}></SubwayArrivals> </div>))
    }
    let routes = this.state.routes;
    var routeComponents = []
    if (routes !== undefined && routes.length !== 0){
      routeComponents = routes.map(
        (route,i) =>
        (<div className="route-widget-container" ><RouteComp origin={route.origin} destination={route.destination}/></div>)
      );
    }
      //console.log(this.state.subways);
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
              {this.state && this.state.allStations && <SubwaySetup subwayStopsJson={this.state.allStations} username={this.state.username} updateFunc={this.userUpdateCallback}/>}
            </div>
            {subwayComponents}
            {/*Pass SubwayArrivalsHere
            <div className="subway-stop-widget-container"></div>
            <div className="subway-stop-widget-container"></div>
            <div className="subway-stop-widget-container"></div>*/}
          </div>
        </div>
        <div className="routes-container">
          <div className="route-widget-container">
            <RouteForm username={this.state.username} updateFunc={this.userUpdateCallback} />
          </div>
          {routeComponents}{/*
          <div className="route-widget-container"></div>
          <div className="route-widget-container"></div>
          <div className="route-widget-container"></div>*/}
        </div>
      </div>
    )
  }

}

export default Feed;
