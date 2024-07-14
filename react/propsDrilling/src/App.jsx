import { useState, createContext } from "react";
import "./App.css";
import Parent from "./Parent";
export const appState = createContext();
function App() {
  const [loading, setLoading] = useState(false);
  const onsubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  return (
    <>
      <appState.Provider value={{ loading, onsubmit }}>
        <Parent isloading={loading} onclickSubmit={onsubmit} />
      </appState.Provider>
    </>
  );
}

export default App;
