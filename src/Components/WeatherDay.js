import React from "react";
import Card from "react-bootstrap/Card";

class WeatherDay extends React.Component {
    render() {
        // console.log('weatherDay.js props',this.props);
        return (
            <>
                <Card style={{ margin:"3%",width: '100%', border:"2px transparent solid" }}>
                    <Card.Body>
                        <Card.Title style={{fontSize:"1.1rem", fontWeight:"bold"}}>Date : <span style={{fontSize:"1.1rem", fontWeight:"normal"}}> {this.props.locationWeatherDate}</span></Card.Title>
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