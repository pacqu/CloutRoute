import React, { Component } from 'react';
import './App.css';
import WeatherBar from './components/Weather';
import Login from './components/Login';
import Register from './components/Register';
import Entry from './components/Entry';
import axios from "axios";
import RouteForm from './components/RouteForm';

class App extends Component {
  constructor(){
    super();
    this.state = {city: 'Port Chester'};
  }

  render() {
    return (
      <div className="App">
        {/*<RouteForm />*/}
        {/*<Entry />*/}
        <WeatherBar city={this.state.city}/>
        <RouteForm />
      </div>
    );
  }
}

export default App;
