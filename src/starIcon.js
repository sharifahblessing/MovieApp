import React from "react";
import { Star } from "@material-ui/icons";
import PropTypes from "prop-types";

export class RatingIcon extends React.Component {
  render() {
    return (
      <div className="star">
        <Star className="starbutton" onClick={props.onClick} />
      </div>
    );
  }
}

RatingIcon.propTypes = {
  onClick: PropTypes.boolean
};
