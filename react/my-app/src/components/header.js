import { useState } from "react";

const Header = () => {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>My favourite color is {color}!</h1>
      <button type={"button"} onClick={() => setColor("blue")}>
        set color
      </button>
    </>
  );
};

export default Header;
