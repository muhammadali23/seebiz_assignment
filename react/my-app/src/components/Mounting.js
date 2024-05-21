import React, { Component } from "react";
import Student from "./Student";

export default class Mounting extends Component {
  constructor(props) {
    super(props);
    console.log("I am a super class method");
    this.state = {
      rollNum: "101",
    };
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps method called");
    console.log(props, state);
    return null;
  }
  render() {
    console.log("App rendered");
    return <Student name="Muhammad Ali" />;
  }
}
