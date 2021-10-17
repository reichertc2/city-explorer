import React from 'react';

class Map extends React.Component {
    render() {
        return (
            <section>
                <h3>City Map</h3>
                <img src={this.props.src} alt={this.props.alt}></img>
            </section>
        )
    }
}

export default Map;