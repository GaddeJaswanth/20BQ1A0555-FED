import React from "react";
class Clock extends React.Component {
  state = {
    time: new Date()
  };

  s = setInterval(() => {
    this.setState({ time: new Date() });
  }, 1000);

  render() {
    return (
      <div>
        <h1>Digital Clock</h1>
        <h1>
          {this.state.time.toLocaleTimeString("en-US", {
            hour12: true
          })}
        </h1>
      </div>
    );
  }
}

export default Clock;
