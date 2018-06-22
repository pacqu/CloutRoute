import React, { Component } from 'react';
import axios from "axios";
import './SubwayArrivals.css';

class SubwaySetup extends Component {

  constructor(props){
    super(props);
    this.state = {
      username: this.props.username,
      allStations: this.props.subwayStopsJson
    };
  }
  handleSubmitSubwayStation(event){
    console.log("Station" + this.refs.stop_to_add.value);
    var jsonBody = {
      'username': this.state.username,
      'stop_id': this.refs.stop_to_add.value
    };
    console.log(jsonBody);
    fetch('/users/addStop', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then(axios.get('/users/getuser/' + this.state.username).then(
      (res) => this.props.updateFunc(res.data) /*res.json()).then((data) => this.props.updateFunc(data)
    )*/));
  }
  componentDidMount(){
    const allStations = this.state.allStations;
    //console.log(allStations);
    var allStationsArray = [];
    for (var i in allStations) allStationsArray.push(allStations[i]);
    //console.log(allStationsArray);
    this.setState({
      allStationsArray: allStationsArray
    });
  }
  render(){
    const allStationsArray = this.state.allStationsArray;
    //console.log(allStationsArray)
    var stationOptions = [];
    if (allStationsArray !== undefined && allStationsArray.length !== 0){
      stationOptions = allStationsArray.map((stopObject, i) =>
      (<option key={i} value={stopObject.stop_id}>
        {stopObject.daytime_routes} - {stopObject.stop_name}
        </option>));
      }
    return (
      <div className="component-container">
        <div id="component-header">
        Stops:
        </div>
        <div id="component-content">
        <select ref="stop_to_add">
        {stationOptions}
        </select>
        <button id="subway-submit-button" type="button"
        onClick={this.handleSubmitSubwayStation.bind(this)}>
        Register
        </button>
        </div>
      </div>
    );
  }

}

export default SubwaySetup;
