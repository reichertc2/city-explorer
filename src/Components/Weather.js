import React from 'react';

class Weather extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>
                <h4>Scheduled Forecast:</h4>
                <h4>{this.props.name}</h4>
                {/* <h4>{this.props.locationWeather.date}</h4> */}
            </>
        )

    }
}

export default Weather;