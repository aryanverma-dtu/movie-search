import React from "react";

export default function MovieCard(props){
    let movie = props.movieObj;
    return (
        <div className="card col-lg-4 col-md-6 col-sm-12">
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`} alt={"movie img"}/>
            <div className="card-body">
                <h3 className="movie-card-title">{movie.title}</h3>
                <p><small>RELEASE DATE: {movie.release_date}</small></p>
                <p><small>RATING: {movie.vote_average}</small></p>
                <p className="card-desc">{movie.overview}</p>

            </div>
        </div>
    );


}