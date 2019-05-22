import React from "react";
import "./App.css";
import PropTypes from "prop-types";

export const Button = props => {
  return (
    <div className="buttonArea">
      <button className="button" onClick={props.onClick}>
        {props.buttonText}
      </button>
    </div>
  );
};
Button.propType = {
  buttonText: PropTypes.string,
  onClick: PropTypes.func
};
