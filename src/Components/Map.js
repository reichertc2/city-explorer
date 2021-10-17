import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <section>
                <h3 style={{textAlign:"center", margin:"2%", fontSize:"1.25rem"}}>City Map</h3>
                <img style={{marginLeft:"10%"}} src={this.props.src} alt={this.props.alt}></img>
            </section>
        )
    }
}

export default Map;