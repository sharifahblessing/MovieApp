import React from "react";
import "./App.css";
import Ratings from "./Ratings";

const defaultImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJFyOtK4pW6j50to0RLhIWMr7wpYepiuCnrBCRubFoTgwXXuQ";

const Movie = movie => {
  movie = {
    poster: "N/A",
    Title: "Kungufu Panda",
    Year: 2010
  };
  const poster = movie.poster === "N/A" ? defaultImage : movie.poster;
  return (
    <div>
      <div className="movie">
        <h2>{movie.Title}</h2>
        <div>
          <img
            width="200"
            alt={`The movie titled: ${movie.Title}`}
            src={poster}
          />
        </div>
        <p>({movie.Year})</p>
      </div>
      <Ratings />
    </div>
  );
};

Movie.defaultProps = {
  poster: "N/A",
  Title: "Kungufu Panda",
  Year: 2010
};
export default Movie;
