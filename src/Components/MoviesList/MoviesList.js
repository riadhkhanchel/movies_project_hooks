import React from "react";
import MovieCard from "../MoviesCard/MovieCard";

const MoviesList = ({moviesList, searchTitle, searchStar}) => {
  return (
    <div>

{moviesList.filter((el) => el.name.toLowerCase().includes(searchTitle.toLowerCase()) && el.rating >= searchStar).map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))}


      {/* {moviesList.map((movie) => (
        <MovieCard movie={movie} key={movie.id} />
      ))} */}
    </div>
  );
};

export default MoviesList;
