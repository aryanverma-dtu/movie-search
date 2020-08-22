import React,{useState} from 'react';
import MovieCard from "./movie_card";

export default function MovieSearchBar(){
    const [query,setQuery] = useState("");
    const [movies,setMovies] = useState([]);
    const movieSearch = async (e)=>{

        e.preventDefault();
        const url = `https://api.themoviedb.org/3/search/movie?api_key=47cdf6dccdf5c3db0e28491d9bad5c64&language=en-US&query=${query}&page=1&include_adult=false`;
        try{
            let res = await fetch(url);
            let data = await res.json();
            setMovies(data.results);
        }
        catch(err){
            console.log(err);
        }
    }
    return (
        <>
            <div id="movie_search_bar" className="container-fluid">
                <form className="form" onSubmit={movieSearch}>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="query" className="label">Search</label>
                            </div>
                            <div className=" col-md-9">
                                <input type={"text"} name={"query"} placeholder={"type your keyword here"} className="input" onChange={e=>{setQuery(e.target.value)}} />
                            </div>
                            <div className="col-md-2">
                                <button className={"btn btn-dark " } type={"submit"}>Submit</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <div className="row">
                {movies.filter(movie=>movie.poster_path).map(movie=><MovieCard movieObj={movie} key={movie.id}/>)}
            </div>
        </>
    );
}