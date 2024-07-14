import { Component } from "react";

export default class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      age: "",
      interest: "react",
    };
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleAgeChange = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  handleInterestChange = (event) => {
    this.setState({
      interest: event.target.value,
    });
  };
  onsubmitHandle = (e) => {
    alert(
      `My name is ${this.state.name}, I am ${this.state.age} and i am interested in ${this.state.interest}`,
      e.preventDefault()
    );
  };
  render() {
    return (
      <div>
        <h1>React Forms</h1>
        <form onSubmit={this.onsubmitHandle}>
          <div>
            <label htmlFor="">Enter your name: </label>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleNameChange}
            />
          </div>
          <div>
            <label htmlFor="">Enter your age: </label>
            <input
              type="number"
              value={this.state.age}
              onChange={this.handleAgeChange}
            />
          </div>
          <div>
            <label htmlFor="">Select your interest: </label>
            <select
              value={this.state.interest}
              onChange={this.handleInterestChange}
            >
              <option value="">react</option>
              <option value="">angular</option>
              <option value="">Vue</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
