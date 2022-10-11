import React, { Component } from "react";

class Colors extends Component {
  state = {
    color: "black"
  };

  setRed = () => {
    this.setState({ color: "red" });
  };
  setBlue = () => {
    this.setState({ color: "blue" });
  };
  setGreen = () => {
    this.setState({ color: "green" });
  };

  render() {
    return (
      <div>
        <h1 style={this.state}>Jaswanth</h1>
        <button onClick={this.setRed}>Red</button>
        <button onClick={this.setBlue}>Blue</button>
        <button onClick={this.setGreen}>Green</button>
      </div>
    );
  }
}

export default Colors;
