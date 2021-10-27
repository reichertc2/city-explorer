import React from 'react';
import axios from 'axios';
import Form from './Form.js'
import CityName from './CityName.js';
import LatLon from './LatLon.js';
import Map from './Map.js'
import Weather from './Weather.js';
import ErrorBlock from './ErrorBlock.js';
import Movies from './Movies.js';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityEntry: '',
      locationQuery: {},
      locationWeather: [],
      mapURL: '',
      error: false,
      errorMessage: '',
      showWX: false,
      moviesArray: [],
      showMovie: false
    }
  }

  resetState = () =>{
    this.setState({
      cityEntry: '',
      locationQuery: {},
      locationWeather: [],
      mapURL: '',
      error: false,
      errorMessage: '',
      showWX: false,
      moviesArray: [],
      showMovie: false
    })
  }

  clearError = () => {
    this.resetState();
  }

  assignLocation = (value) => {
    // console.log(value, this.state);

    this.setState({ cityEntry: value }, () => {
      this.getLocation();
    })

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
      let weatherAPI = await axios.get(`${process.env.REACT_APP_SERVER_LOCATION}weather?lat=${params.lat}&lon=${params.lon}&searchQuery=${this.state.cityEntry}`);
      let movieAPI = await axios.get(`${process.env.REACT_APP_SERVER_LOCATION}movies?searchQuery=${this.state.cityEntry}`)
      // console.log(weatherAPI.data);
      // console.log(movieAPI);
      this.setState({
        locationQuery: dataPull.data[0],
        locationWeather: weatherAPI.data,
        showWX: true,
        moviesArray: movieAPI.data,
        showMovie: true
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
    // console.log('this is state', this.state.error);
    return (


          <main>
                <Form 
                  getLocation={this.getLocation}
                  assignLocation={this.assignLocation} 
                  resetState={this.resetState}/>

                {this.state.locationQuery.display_name && <div>
                  <CityName 
                    name={this.state.locationQuery.display_name}
                  />
                  <LatLon
                    lat={this.state.locationQuery.lat}
                    lon={this.state.locationQuery.lon}
                  />

                    <Map
                      src={this.state.mapURL}
                      alt={this.state.locationQuery.display_name}
                    />


                    {this.state.showWX &&
                      <Weather
                        locationWeather={this.state.locationWeather}
                         />
                    }
                  <section style={{width: "100%"}}>
                  <h3 style={{textAlign:"center", margin:"5%", fontSize:"1.5rem"}}>Movies with City Name:</h3>
                    {this.state.showMovie && this.state.moviesArray.map((el) =>

                      <Movies
                        movieTitle={el.title}
                        movieOverview={el.overview}
                        moviePopularity={el.popularity}
                        movieImage={el.imageURL}
                        movieVotes={el.average_votes} />)}

                  </section>
                </div>}
                {(this.state.error) &&
                  <ErrorBlock
                    clearError={this.clearError}
                    errorMessage={this.state.errorMessage}
                    error={this.state.error} />
                }

          </main>


    )
  };
}

export default Main;
