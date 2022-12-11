// import logo from './logo.svg';
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // document.body.style.backgroundColor = "black";
  const [alert, setAlert] = useState(null);
  // setAlert("hey");
  const [info, setInfo] = useState("ligth");
  const [success, setSuccess] = useState("ligth");
  const [secondary, setSecondary] = useState("ligth");

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
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Light Mode has been Enabled", "dark");
      document.title = "TextUtils - Play With Your Text";
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
      setSuccess("success");
      document.body.style.backgroundColor = "#28a745";
      showAlert("Success Mode has been Enabled", "dark");
    }
  };
  const changeColorSecondary = () => {
    if (secondary !== "secondary") {
      setSecondary("secondary");
      document.body.style.backgroundColor = "#6c757d";
      showAlert("Secondary Mode has been Enabled", "dark");
    }
  };
  return (
    <>
      {/* <Router> */}
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
      {/* <Routes> */}
      {/* <Route
            exact
            path="/"
            element={
              <TextForm
                showAlert={showAlert}
                heading="Enter Your Text Here"
                mode={mode}
              />
            }></Route> */}
      {/* <Route exact path="/about" element={<About />}></Route>
        </Routes> */}
      {/* </Router> */}
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
