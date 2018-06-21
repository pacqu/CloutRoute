import React, { Component } from 'react';
import './SubwayArrivals.css';

class SubwayArrivals extends Component {

  constructor(props){
    super(props);
    this.state = {
      //stationID: this.props.stationInfoFromApp.stationID
    };
  }

  render(){
    return (
      <div className="component-container">
        <div id="component-header">
        </div>
        <div id="component-content">

        </div>
      </div>
    );
  }

}

export default SubwayArrivals;
