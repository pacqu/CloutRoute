import React, { Component } from 'react';

class RouteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      origin: '',
      destination: '',
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

    console.log( this.state.origin );

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
            Origin:
            <input
              name="origin"
              type="text"
              onChange={this.handleInputChange} />
          </label>
          <br />
          <label>
            Destination:
            <input
              name="destination"
              type="text"
              onChange={this.handleInputChange} />
            </label>
            </div>
            <div className="submit-button-container">
                 <button id="submit-button" type="button"
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
