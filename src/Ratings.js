import React from "react";
import { Star, StarBorder } from "@material-ui/icons";

class Ratings extends React.Component {
  render() {
    return (
      <div className="star-Rating">
        <Star className="stars" />
        <Star className="stars" />
        <Star className="stars" />
        <StarBorder className="stars" />
        <StarBorder className="stars" />
      </div>
    );
  }
}

export default Ratings;
