// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");
  // document.body.style.backgroundColor = "black";

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };
  return (
    <>
      <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode} />
      <TextForm heading="Enter Your Text Here" mode={mode} />
      {/* <About /> */}
    </>
  );
}

export default App;
