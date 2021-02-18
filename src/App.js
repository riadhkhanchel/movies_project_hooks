import "./App.css";
import React, { useState } from "react";
import { moviesData } from "./Assets/data";
import MoviesList from "./Components/MoviesList/MoviesList";
import NavBar from "./Components/NavBar/NavBar";
// import FilterByName from './filterByName/FilterByName';
// import FilterByRating from './Rating/Rating'

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("")
  const [searchStar, setSeachStar] = useState(0)
  return (
    <div>
      <div>
        <NavBar setSearchTitle ={setSearchTitle} setSeachStar={setSeachStar}/>
        {/* <FilterByName inputSearch={inputSearch} setInputSearch={setInputSearch} /> */}
        {/* <FilterByRating filterRate={true} rating={rating} setRating={setRating} /> */}
      </div>
        <MoviesList moviesList={moviesList}  searchTitle={searchTitle} searchStar ={searchStar}  />
    </div>
  );
}

export default App;
