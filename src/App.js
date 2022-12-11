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
  const [info, setInfo] = useState("ligth");
  const [success, setsuccess] = useState("ligth");
  const [secondary, setsecondary] = useState("ligth");

  const showAlert = (msg, type) => {
    setAlert({
      msg: msg,
      type: type,
    });
  };

  setTimeout(() => {
    setAlert(null);
  }, 5000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Dark Mode has been Enabled", "dark");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "dark");
    }
  };

  const changeColorInfo = () => {
    if (info !== "info") {
      setInfo("info");
      document.body.style.backgroundColor = "#cff4fc";
      showAlert("Info Mode has been Enabled", "dark");
    }
  };
  const changeColorSuccess = () => {
    if (success !== "success") {
      setInfo("success");
      document.body.style.backgroundColor = "#28a745";
      showAlert("Success Mode has been Enabled", "dark");
    }
  };
  const changeColorSecondary = () => {
    if (secondary !== "secondary") {
      setInfo("secondary");
      document.body.style.backgroundColor = "#6c757d";
      showAlert("Secondary Mode has been Enabled", "dark");
    }
  };
  return (
    <>
      <Navbar
        heading="TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        c1={"Info"}
        c2={"Success"}
        c3={"Secondary"}
        changeColorInfo={changeColorInfo}
        changeColorSuccess={changeColorSuccess}
        changeColorSecondary={changeColorSecondary}
      />
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
