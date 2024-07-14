import "./App.css";
// import Students from "./list_rendering/Students";
import Child from "./Child";
function App() {
  function getData(data) {
    console.log(data);
  }
  return (
    <>
      {/* <Students /> */}
      <Child getData={getData} />
    </>
  );
}

export default App;
