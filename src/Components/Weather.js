import React from 'react';
import ErrorBlock from './ErrorBlock.js';
import Card from 'react-bootstrap/Card'

class Weather extends React.Component {
    render() {
        console.log(this.props);

        return (
            <>

                <Card class="border-1 border-dark" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title className="text-center">Scheduled Forecast: {this.props.locationWeatherDate}</Card.Title>
                        <Card.Text>
                            {this.props.locationWeatherDescription}
                        </Card.Text>

                    </Card.Body>
                </Card>
                <ErrorBlock
                    clearError={this.props.clearError}
                    errorMessage={this.props.errorMessage}
                    error={this.props.error} />

            </>
        )

    }
}

export default Weather;