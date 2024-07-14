import React, { Component } from "react";

export default class Child extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log("child getDerivedStateFromProps");
    return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("child shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(prevState, prevProps) {
    console.log("child getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate() {
    console.log("child componentDidUpdate");
  }
  render() {
    console.log("child render");
    return <div></div>;
  }
}
