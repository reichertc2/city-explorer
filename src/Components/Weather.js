import React from 'react';
// import ErrorBlock from './ErrorBlock.js';
import WeatherDay from './WeatherDay.js';
// import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
    render() {
        // console.log('weather.js props', this.props);

        return (
            <section>
                <h3>4 Day Forecast</h3>
                {this.props.locationWeather.map((el) =>
                    <WeatherDay
                        locationWeatherDate={el.date}
                        locationWeatherDescription={el.description}
                        key={el.key}
                    />)
                }
            </section>
        )
    }
}

export default Weather;