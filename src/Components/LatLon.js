import React from 'react';

class LatLon extends React.Component{
    render(){
        return(
            <>
             <h4>Latitude: {this.props.lat}</h4>
            <h4>Longitude: {this.props.lon}</h4>
            </>
        )
    }
}

export default LatLon;