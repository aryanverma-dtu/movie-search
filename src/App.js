import React from 'react';
import MovieSearchBar from "./components/movie_search_bar";
import './App.css';

function App() {
  return (
      <div className="container-fluid">
        <p className={"title"}>React Movie Search</p>
        <MovieSearchBar/>
      </div>
  );
}

export default App;
