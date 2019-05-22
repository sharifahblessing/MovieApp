import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}

Header.propType = {
  name: PropTypes.string
};

export default Header;
