//using functional component
import { useState } from "react";
export default function Form() {
  const [state, setState] = useState({
    formdata: {
      name: "",
      age: "",
      interest: "react",
    },
    formDataList: [],
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      formdata: {
        ...prevState.formdata,
        [name]: value,
      },
    }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setState((prevState) => ({
      formdata: {
        name: "",
        age: "",
        interest: "react",
      },
      formDataList: [...prevState.formDataList, prevState.formdata],
    }));
  };
  return (
    <>
      <h1>Form using FC</h1>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="name">Enter your name: </label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.formdata.name}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="age">Enter your age: </label>
          <input
            type="number"
            id="age"
            name="age"
            value={state.formdata.age}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="interest">Select your interest: </label>
          <select
            id="interest"
            name="interest"
            value={state.formdata.interest}
            onChange={handleInputChange}
          >
            <option value="react">React</option>
            <option value="angular">Angular</option>
            <option value="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      {
        <div>
          <h2>Form Data</h2>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Interest</th>
              </tr>
            </thead>
            <tbody>
              {state.formDataList.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.age}</td>
                  <td>{data.interest}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      }
    </>
  );
}
