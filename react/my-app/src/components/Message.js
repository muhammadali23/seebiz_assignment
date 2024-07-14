import React, { Component } from "react";

class Message extends Component {
  constructor() {
    super();
    this.state = { message: "Welcome visitor" };
  }
  changeMessage() {
    this.setState({
      message: "Thanks for subscribe",
    });
  }
  render() {
    // this.setState({ message: "Thanks for updating" });
    return (
      <div style={{ textAlign: "center" }}>
        <h1>{this.state.message}</h1>
        <button onClick={() => this.changeMessage()}>Subscribe</button>
      </div>
    );
  }
}

export default Message;
