import React from "react";
import {
  FavoriteBorder,
  AccessTime,
  PlayCircleOutline,
  Home
} from "@material-ui/icons";
// import IconWithLabel from "./IconWithLabel";

const MenuBar = () => {
  return (
    <div className="menuBar">
      <Home className="selected" />
      <FavoriteBorder className="not-selected" />
      <AccessTime className="not-selected" />
      <PlayCircleOutline className="not-selected" />
    </div>
  );
};

export default MenuBar;
