import React, { Component } from "react";
import Marks from "./Marks";
export default class Student extends Component {
  constructor() {
    super();
    console.log("parent constructor");
  }
  static getDerivedStateFromProps(state, props) {
    console.log("getDerivedStateFromProps-parent");
    return null;
  }
  render() {
    console.log("Student rendered");
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <Marks />
      </div>
    );
  }
  componentDidMount() {
    console.log("parent");
  }
}
