import React, { Component } from 'react';
import axios from "axios";
import './RouteComp.css';

class RouteComp extends Component {

  constructor(props){
    super(props);
    this.state = {
      origin: this.props.origin,
      destination: this.props.destination
    };
    this.regenerateRoute=this.regenerateRoute.bind(this);
  }

  regenerateRoute(){
    console.log("hello!");
    var jsonBody = {
      originAdd: this.state.origin,
      destinationAdd: this.state.destination
    };
    console.log(jsonBody)
    fetch('/maps/getRoute', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then((res) => {return res.json()}).then(data =>
      (this.setState({
        routes: data.routes
      })));
  }

  componentDidMount(){
    this.regenerateRoute();
    setTimeout(this.regenerateSchedule, 60000);
  }
  render(){
    let origin =  this.state.origin;
    let destination = this.state.destination;
    let routes = this.state.routes;
    var routeListings = [];
    if (routes != undefined){
      console.log(routes);
      routeListings = (
        <div className="route-info">
          <div className="route-time">
            {routes[0].legs[0].duration.text}
          </div>
          <div className="route-range">
            <p>
              depart at {routes[0].legs[0].departure_time.text}
            </p>
            <p>
              arrive by {routes[0].legs[0].arrival_time.text}
            </p>
          </div>
        </div>
      )
    }
    return(
      <div className="route-component-container">
        <p className="place" id="origin">{origin}</p>
        <p>to</p>
        <p className="place" id="destination">{destination}</p>
        {routeListings}
      </div>
    );
  }
}

export default RouteComp;
