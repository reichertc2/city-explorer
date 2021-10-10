import React from "react";

class CityName extends React.Component{
    render(){
        return(
            <>
            <h3>{this.props.name}</h3>
            </>
        )
    }
}

export default CityName;