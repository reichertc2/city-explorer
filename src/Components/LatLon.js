import React from 'react';

class LatLon extends React.Component {
    render() {
        return (
            <>
                <h3 style={{ textAlign: "center", margin: ".5%", fontSize: "1.25rem" }}>Coordinates: </h3>
                <h4 style={{ textAlign: "center", fontSize: "1rem" }}>Latitude: {this.props.lat}</h4>
                <h4 style={{ textAlign: "center", fontSize: "1rem" }}>Longitude: {this.props.lon}</h4>
            </>
        )
    }
}

export default LatLon;