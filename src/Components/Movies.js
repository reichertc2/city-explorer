import React from "react";
import Card from 'react-bootstrap/Card';

class Movies extends React.Component {
    render() {
        // console.log('movies', this.props.movieTitle);

        return (
            <>
                {/* <h4></h4>
                <h4></h4>
                <h4>{this.props.moviePopularity}</h4>
                <h4></h4>
                <h4>{this.props.movieVotes}</h4> */}
                <Card style={{ width: '18rem' }}>
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

export default Movies;