import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Muhammad Ali",
    };
    console.log("Constructor called");
  }
  ChangeState = () => {
    console.log("Button clicked");
    this.setState({
      name: "Ali Muhammad",
    });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps called");
    console.log(state);
    console.log(props);
    return null;
  }
  shouldComponentUpdate(nextState, nextProps) {
    console.log("shouldComponentUpdate called");
    console.log(nextState);
    console.log(nextProps);
    return true;
  }
  render() {
    console.log("render called");
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={this.ChangeState}>Click me</button>
        <h1>{this.props.city}</h1>
      </div>
    );
  }
}
