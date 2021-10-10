import React from 'react';

class Map extends React.Component{
    render(){
        return(
            <>
              <img src={this.props.src} alt={this.props.alt}></img>
            </>
        )
    }
}

export default Map;