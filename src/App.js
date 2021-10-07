import './App.css';
import React from 'react';
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityEntry: '',
      locationQuery: {}
    }
  }
  getLocation = async () => {
    // .preventDefault();
    console.log('Exploration Initated');
    let REACT_APP_LOCATION_API_KEY = process.env.REACT_APP_LOCATION_API_KEY
    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${REACT_APP_LOCATION_API_KEY}&q=${this.state.cityEntry}&format=json`
    console.log(apiUrl);
    let dataPull = await axios.get(apiUrl);
    console.log(dataPull.data[0]);
    this.setState({ locationQuery: dataPull.data[0] })
  }
  render() {
    return (
      <>
        <h1>Here i am</h1>
        <h4>{this.state.cityEntry}</h4>

        <input onChange={(event) => {
          event.preventDefault();
          this.setState({ cityEntry: event.target.value })
        }} placeholder="Enter City Name"></input>

        <button onClick={this.getLocation}>Explore!!</button>
        <h3>{this.state.locationQuery.display_name}</h3>
        <h4>Latitude: {this.state.locationQuery.lat}</h4>
        <h4>Longitude: {this.state.locationQuery.lon}</h4>



      </>
    )
  };
}

export default App;
