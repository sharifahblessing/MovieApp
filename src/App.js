import React from "react";
import "./App.css";
import Header from "./Header";
import { MoviesContainer } from "./moviesContainer";
import MenuBar from "./MenuBar";
import WelcomePage from "./WelcomePage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: "welcome"
    };

    this.changePage = this.changePage.bind(this);
  }

  changePage(pageName) {
    console.log(123);
    this.setState({ currentPage: pageName });
  }

  render() {
    if (this.state.currentPage === "welcome") {
      return <WelcomePage changePage={this.changePage} />;
    } else {
      return (
        <div className="App">
          <Header name="Movie App" />
          <MoviesContainer />
          <MenuBar />
        </div>
      );
    }
  }
}

export default App;
