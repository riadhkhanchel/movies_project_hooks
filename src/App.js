import "./App.css";
import React, { useState } from "react";
import { moviesData } from "./Assets/data";
import MoviesList from "./Components/MoviesList/MoviesList";
import NavBar from "./Components/NavBar/NavBar";
import AddMovie from "./Components/AddMovie/AddMovie";

function App() {
  const [moviesList, setMoviesList] = useState(moviesData);
  const [searchTitle, setSearchTitle] = useState("")
  const [searchStar, setSeachStar] = useState(0)

  const handleMovie =(NewMovie) =>{
    setMoviesList([...moviesList, NewMovie])
  }
  return (
    <div>
      <div>
        <NavBar setSearchTitle ={setSearchTitle} setSeachStar={setSeachStar}/>
         </div>
      <AddMovie handleMovie={handleMovie}/>
        <MoviesList moviesList={moviesList}  searchTitle={searchTitle} searchStar ={searchStar}  />
    </div>
  );
}

export default App;
