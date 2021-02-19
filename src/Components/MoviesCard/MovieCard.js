import React from "react";
import "./MovieCard.css";
import Rating from "@material-ui/lab/Rating";

const MovieCard = ({ movie }) => {
  return (
    <div className="wrapper">
      <div className="main_card">
        <div className="card_left">
          <div className="img_container">
            <img src={movie.image} alt={movie.name} />
          </div>
        </div>
        <div className="card_right">
          <div className="card_details">
            <h1>{movie.name}</h1>
            <div className="card_cat">
              <p className="year">{movie.date}</p>
              <p className="genre">{movie.type}</p>
            </div>
            <p className="disc">{movie.description}</p>
            <Rating name="read-only" value={movie.rating} readOnly />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
