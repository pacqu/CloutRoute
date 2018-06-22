import React, { Component } from 'react';
import axios from "axios";

class RouteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: this.props.username,
      origin: '',
      destination: ''
      //PERHAPS ADD TIMES?
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputChange(event){
    // this.setState({origin: event.target.value});
    const origin = event.target.origin;
    const destination = event.target.destination
    this.setState({
      origin: origin,
      destination: destination
    })
  }
  handleSubmit(event){
    event.preventDefault();
    var jsonBody = {
      username: this.state.username,
      origin: this.refs.origin.value,
      destination: this.refs.destination.value
    };
    fetch('/users/addroute', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(jsonBody)
    }).then(axios.get('/users/getuser/' + this.state.username).then(
      (res) => this.props.updateFunc(res.data)));
  }
  render(){
    return (
      <div className="user-route-input-container">
        <div className="instructions">
          Please enter the origin and destination in the following format:
          <br />
          695 Park Ave, New York, NY 10065
        </div>
        <br />
        <form onSubmit={this.handleSubmit}>
        <div className="user-route-input">
          <label>
            <input
              name="origin"
              className="route-input-box"
              ref="origin"
              placeholder="origin"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            <input
              name="destination"
              className="route-input-box"
              ref="destination"
              placeholder="destination"
              type="text"
              onChange={this.handleInputChange} />
            </label>
            </div>
            <div className="submit-button-container">
                 <button id="route-submit-button" type="button"
                      onClick={this.handleSubmit.bind(this)}>
                      Submit
                 </button>
            </div>
        </form>
      </div>
    )
  }
}

export default RouteForm;
