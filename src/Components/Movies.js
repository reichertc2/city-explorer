import React from "react";
import Movie from "./Movie.js";

class Movies extends React.Component {
    render() {
        // console.log('movies', this.props.movieTitle);

        return (
            <>
            <h3>Movies with City Name:</h3>
                <Movie className="d-inline-block" style={{width: '50%'}}
                    movieImage={this.props.movieImage}
                    movieTitle={this.props.movieTitle}
                    movieOverview={this.props.movieOverview} />


            </>
        )
    }
}

export default Movies;