import React, { Component } from 'react';
import './SubwayArrivals.css';
import axios from "axios";

class SubwayArrivals extends Component {

  constructor(props){
    super(props);
    this.state = {
      stationId: 633, //this.props.stationId
      stationName:"",
      northboundtrains: [], //update on setInterval
      southboundtrains: [] //update on setInterval
    };
    this.regenerateSchedule=this.regenerateSchedule.bind(this);
  }

  regenerateSchedule(){
    console.log("hello!");
    const stationId = this.state.stationId;
    if (stationId !== undefined){
      axios.get('/subway/stop/'+ stationId).then(
        res => {
          this.setState({
            stationName: res.data.daytime_routes + " - " + res.data.stop_name});
          console.log(this.state.stationName);
        });
    }
    axios.get('/subway/schedule/'+ stationId)
    .then(res => {
      this.setState({
        northboundtrains: res.data["N"],
        southboundtrains: res.data["S"]
      });
    });
  }

  componentDidMount(){
    this.regenerateSchedule();
    setTimeout(this.regenerateSchedule, 60000);
  }



  render(){
    const stationId = this.state.stationId;
    const stationName = this.state.stationName;
    const northboundtrains = this.state.northboundtrains;
    const southboundtrains = this.state.southboundtrains;
    var northList = [];
    var southList = [];
    var stop = "";
    if(northboundtrains !== undefined && northboundtrains.length !== 0){
      northList = northboundtrains.map((trains,i) =>{
        //CultureInfo culture = new CultureInfo("en-US");
        var northDate = new Date(trains.arrivalTime*1000);
        return (<li key={i}>{trains.routeId} - Arrival: {northDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} </li>)})
    }
    if(southboundtrains !== undefined && southboundtrains.length !== 0){
      southList = southboundtrains.map((trains,i) =>{
        var southDate = new Date(trains.arrivalTime*1000);
      return (<li key={i}>{trains.routeId} - Arrival: {southDate.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })} </li>)})
    }
    return (
      <div className="component-container">
        <h1>{stationName}</h1>
        <div id="Northbound-Trains">
          <ul>
            Northbound-Trains
            {northList}
          </ul>
        </div>
        <div id="Southbound-Trains">
          <ul>
            Southbound-Trains
            {southList}
          </ul>
        </div>
      </div>
    );
  }

}

export default SubwayArrivals;
