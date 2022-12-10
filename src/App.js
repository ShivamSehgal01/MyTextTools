// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
// import TextForm from "./components/TextForm";

function App() {
  return (
    <>
      <Navbar heading="TextUtils" />
      {/* <TextForm heading="Enter Your Text Here" /> */}
      <About />
    </>
  );
}

export default App;
