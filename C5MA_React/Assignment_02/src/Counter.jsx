import { Component } from "react";

export default class Counter extends Component {
  state = {
    count: 0,
  };
  onIncrement = () => {
    this.setState((previousState) => ({ count: previousState.count + 1 }));
  };
  onDecrement = () => {
    this.setState((previousState) => ({ count: previousState.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h3>{this.state.count}</h3>
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}
