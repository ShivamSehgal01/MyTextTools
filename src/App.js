// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";

function App() {
  const [mode, setMode] = useState("light");
  // document.body.style.backgroundColor = "black";
  const [alert, setAlert] = useState(null);
  // setAlert("hey");

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 2000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "success");
    }
  };
  return (
    <>
      <Navbar heading="TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <TextForm
        showAlert={showAlert}
        heading="Enter Your Text Here"
        mode={mode}
      />
      {/* <About /> */}
    </>
  );
}

export default App;
