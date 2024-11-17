import { useState } from "react";
// import reactLogo from "./react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";
import Main from "./MainC";
import Animal from "./Animal";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Main />
      <Animal selectedAnimal="dog" />
    </>
  );
}

export default App;
