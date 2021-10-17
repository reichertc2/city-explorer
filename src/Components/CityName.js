import React from "react";

class CityName extends React.Component{
    render(){
        return(
            <>
            <h3 style={{textAlign:"center", margin:"5%", fontSize:"1.5rem"}}>{this.props.name}</h3>
            </>
        )
    }
}

export default CityName;