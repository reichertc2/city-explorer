import React from "react";
import Movie from "./Movie.js";

class Movies extends React.Component {
    render() {
        // console.log('movies', this.props.movieTitle);

        return (
            <>
            
                <Movie className="d-inline-block" style={{width: '45%'}}
                    movieImage={this.props.movieImage}
                    movieTitle={this.props.movieTitle}
                    movieOverview={this.props.movieOverview} />


            </>
        )
    }
}

export default Movies;