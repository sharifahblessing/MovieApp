import React from "react";
import Header from "./Header";
import { Button } from "./Button";
import MenuBar from "./MenuBar";

class WelcomePage extends React.Component {
  render() {
    return (
      <div className="Welcome">
        <Header name=" Welcome To Movie App" />
        <p className="descriptionOfApp ">
          This app has been created to bring Uganda’s history to life <br />
          as you walk down the street.
        </p>
        <Button buttonText="Explore" onClick={this.props.changePage} />
        <MenuBar />
      </div>
    );
  }
}

export default WelcomePage;
