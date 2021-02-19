// //This is a child component of MoviesList
// import React from "react";
// import { Card } from "react-bootstrap";
// import Rating from "@material-ui/lab/Rating";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import "../MoviesCard/MovieCard.css";
// const MovieCard = ({ movie }) => {
//   return (
//     <div className="MainCard" >
//       <Card style={{ width: "18rem" }} key={movie.id} >
//         <Card.Img variant="top" src={movie.image} />
//         <Card.Body>
//           <Card.Title>{movie.name}</Card.Title>
//           <p className="disc">{movie.description}</p>
//           {/* <Card.Text>{movie.description}</Card.Text> */}
//           <Box component="fieldset" mb={3} borderColor="transparent">
//             <Typography component="legend">Our Rating</Typography>
//             <Rating name="read-only" value={movie.rating} readOnly />
//           </Box>
//         </Card.Body>
//       </Card>
//     </div>
//   );
// };

// export default MovieCard;

import React from "react";

import "./MovieCard.css";

import Rating from "@material-ui/lab/Rating";

const MovieCard = ({ movie, handleMovie }) => {
  return (
    <div className="wrapper">
      <div className="main_card" onClick={() => handleMovie(movie.name)}>
      <div className="card_right">
          <div className="img_container">
            <img src={movie.image} alt={movie.name} />
          </div>
          <div className="play_btn">
            <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              <i className="fas fa-play-circle" />
            </a>
          </div>
        </div>
        <div className="card_left">
          <div className="card_details">
            <h1>{movie.name}</h1>
            <div className="card_cat">
              <p className="year">{movie.date}</p>
              <p className="genre">{movie.type}</p>
              <p className="time">2h 28m</p>
            </div>
            <p className="disc">{movie.description}</p>
            {/* <a href="https://www.imdb.com/title/tt4912910/" target="_blank">
              Read More
            </a> */}
            <Rating name="read-only" value={movie.rating} readOnly />{" "}
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default MovieCard;
