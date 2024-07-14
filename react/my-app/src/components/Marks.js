import React, { Component } from "react";

export default class Marks extends Component {
  constructor() {
    super();
    console.log("child constructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps-child");
    return null;
  }
  render() {
    console.log("Marks rendered");
    return (
      <div>
        <h1>Marks compnent</h1>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount-child");
  }
}
