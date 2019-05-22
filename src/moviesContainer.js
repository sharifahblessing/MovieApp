import React from "react";
import Movie from "./Movie";
import "./App.css";

export class MoviesContainer extends React.Component {
  render() {
    return (
      <div className="movie-Container">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
    );
  }
}
