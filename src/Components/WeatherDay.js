import React from "react";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
    render() {
        // console.log('weatherDay.js props',this.props);
        return (
            <>
                <Card className="border-1 border-dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Scheduled Forecast: {this.props.locationWeatherDate}</Card.Title>
                        <Card.Text>
                            {this.props.locationWeatherDescription}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default WeatherDay;