import { useContext } from "react";
import { appState } from "./App";

const GrandChild = () => {
  const context = useContext(appState);
  const { loading, onsubmit } = context;
  return (
    <div>
      <button onClick={onsubmit} disabled={loading}>
        {loading ? "loading" : "Submit"}
      </button>
    </div>
  );
};

export default GrandChild;
