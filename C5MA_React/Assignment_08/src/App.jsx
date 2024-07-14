import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [userdata, setUserData] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);
  return (
    <div>
      <h1>User information</h1>
      <ul>
        {userdata.map((userdata) => (
          <li key={userdata.id}> Name: {userdata.name} </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
