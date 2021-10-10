import './App.css';
import React from 'react';
import axios from 'axios';
// import Form from './Components/Form.js'
import CityName from './Components/CityName.js';
import LatLon from './Components/LatLon.js';
import Map from './Components/Map.js'
import Weather from './Components/Weather.js';
import ErrorBlock from './Components/ErrorBlock.js';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityEntry: '',
      locationQuery: {},
      mapURL: '',
      error: false,
      errorMessage: ''
    }
  }

  clearError = () => {
    this.setState({
      error: false,
      errorMessage: '',
      cityEntry: ''
    })
  }

  assignLocation(value) {
    this.setState({ cityEntry: value })
  }

  getLocation = async () => {
    // console.log('Exploration Initated');
    let REACT_APP_LOCATION_API_KEY = process.env.REACT_APP_LOCATION_API_KEY
    let apiUrl = `https://us1.locationiq.com/v1/search.php?key=${REACT_APP_LOCATION_API_KEY}&q=${this.state.cityEntry}&format=json`
    // console.log(apiUrl);
    // adding parametersfor the server



    // error message display in 'try 'catch' method
    try {


      let dataPull = await axios.get(apiUrl);
      // console.log(dataPull.data[0]);
      let params = {
        lat: dataPull.data[0].lat,
        lon: dataPull.data[0].lon,
        searchQuery: dataPull.data[0].display_name
      }
      let weatherAPI = await axios.get(`http://localhost:3001/weather?lat=${params.lat}&lon=${params.lon}&searchQuery=${params.searchQuery}`);
      console.log(weatherAPI.data);
      this.setState({
        locationQuery: dataPull.data[0],
      })
    }
    catch (error) {
      this.setState({
        error: true,
        errorMessage: error.message
      })
      // console.log(`There was an error ${error.message}`);
      // console.log(`This error state: ${this.state.error}`)
    }
    // get map URL
    this.setState({ mapURL: `https://maps.locationiq.com/v3/staticmap?key=${REACT_APP_LOCATION_API_KEY}&center=${this.state.locationQuery.lat},${this.state.locationQuery.lon}&size=600x600&zoom=14&path=fillcolor:%2390EE90|weight:2|color:blue|${this.state.locationQuery.lat},${this.state.locationQuery.lon}|${this.state.locationQuery.lat},${this.state.locationQuery.lon}|${this.state.locationQuery.lat}|${this.state.locationQuery.lat},${this.state.locationQuery.lon}|${this.state.locationQuery.lat},${this.state.locationQuery.lon}` })
  }


  render() {

    return (
      <>
        <main>
          <h1>Welcome to City Explorer</h1>
          {/* <Form 
          // getLocation={this.getLocation} 
          assignLocation={this.assignLocation}
          getLocation={this.getLocation} /> */}

          <InputGroup className="mb-3">
            <InputGroup.Text id="addon1" className="p3">City Search:</InputGroup.Text>
            <FormControl
              placeholder="Enter City Name"
              onChange={(event) => {
                event.preventDefault();
                this.setState({ cityEntry: event.target.value })
              }} />
            <Button variant="secondary" onClick={this.getLocation}>Explore!!!!!!!!!</Button>
          </InputGroup>

          {this.state.locationQuery.display_name && <div>
            <CityName
              name={this.state.locationQuery.display_name} />
            <LatLon
              lat={this.state.locationQuery.lat}
              lon={this.state.locationQuery.lon} />
            <Map
              src={this.state.mapURL}
              alt={this.state.locationQuery.display_name} />
            <Weather />
          </div>}

          <ErrorBlock
            clearError={this.clearError}
            errorMessage={this.state.errorMessage}
            error={this.state.error} />

        </main>


      </>
    )
  };
}

export default App;
