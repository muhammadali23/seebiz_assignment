import { useState } from "react";

export default function Child(props) {
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    props.getData(name);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button>submit</button>
      </form>
    </div>
  );
}
