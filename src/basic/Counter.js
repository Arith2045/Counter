import React from "react";

export default class Counter extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Mathematics",
      count: 0
    };
  }

  onClicked = () => {
    this.setState({ number: this.state.number ? this.state.number + 1 : this.state.count + 1 });
  };

  render() {
    return (
      <div className="App" style={{ textAlign: "center" }}>
        <h1>{this.state.number ? this.state.number : this.state.title}</h1>
        <button onClick={this.onClicked}>+1</button>
      </div>
    );
  }
}
