import React from "react";
import Card from "react-bootstrap/Card";

class Movie extends React.Component{
    render(){
        return(
            <>
            <Card style={{ width: '45%' }} className="d-inline-block" >
                    <Card.Img variant="top" src={this.props.movieImage} alt={this.props.movieTitle} />
                    <Card.Body>
                        <Card.Title>{this.props.movieTitle}</Card.Title>
                        <Card.Text>
                        {this.props.movieOverview}
                        </Card.Text>
                        {/* <Button variant="primary">Go somewhere</Button> */}
                    </Card.Body>
                </Card>
            </>
        )
    }
}

export default Movie;
