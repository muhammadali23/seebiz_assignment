import React, { Component } from "react";
import Updating2 from "./Updating2";
class Updating1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name1: "Muhammad Ali",
    };
  }
  ChangeState = () => {
    console.log("Button clicked");
    this.setState({
      name1: "Ali Sajjad",
    });
  };
  render() {
    return (
      <div>
        <Updating2 name={this.state.name1} />
        <button onClick={this.ChangeState}>Change State</button>
      </div>
    );
  }
}
export default Updating1;
