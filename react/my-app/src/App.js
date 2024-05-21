// import NavBar from "./components/navbar";
// import Garge from "./components/footer";
import Header from "./components/header";
import Message from "./components/Message";
import Mounting from "./components/Mounting";
function App() {
  return (
    <>
      {/* <NavBar />
      <Garge /> */}
      <Header />
      <Message />
      <Mounting name="I am prop from mounting" />
    </>
  );
}

export default App;
