import React, { Component } from 'react';
import axios from "axios";

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
      routeListings = routes.map((routee,i) => (
        <div key={i}>
        Depart At: {routee.legs[0].departure_time.text} <br/>
        Arrive At: {routee.legs[0].arrival_time.text} <br/>
        Trip Duration: {routee.legs[0].duration.text} <br/>
        </div>
      ))
    }
    return(
      <div>
      <h4>{origin}</h4>
      <h5>to</h5>
      <h4>{destination}</h4>
      <h6>Routes</h6>
      {routeListings}

      </div>
    );
  }
}

export default RouteComp;
