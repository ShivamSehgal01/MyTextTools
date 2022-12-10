import React, { useState } from "react";

export default function Textform(props) {
  // Convert to UpperCase
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(newText);
  };

  // Convert to LowerCase
  const handleloClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    // console.log(newText);
  };

  //  Clear Text
  function handleClrClick() {
    let newText = "";
    setText(newText);
  }

  // Copy Text
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  // Paste Text
  const handlePaste = () => {
    let paste = document.getElementById("mybox");
    navigator.clipboard.readText().then((text) => (paste.innerText = text));
  };

  // Remove Extra Spaces
  const handleExtraSpace = () => {
    let newT = text;
    newT = text.split(/[ ]+/);
    setText(newT.join(" "));
  };

  // Change Color
  const handleColor = () => {
    let box = document.getElementById("mybox");
    let newColor = color;
    if (box.style.color !== newColor) {
      box.style.color = newColor;
    } else {
      box.style.color = "black";
    }
  };

  // Handle Change
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  //Handle Color
  const handleOnColor = (event) => {
    setColor(event.target.value);
    console.log(color);
  };

  const [text, setText] = useState("");
  const [color, setColor] = useState("");
  //   setText("Hey New Text"); // Change State
  return (
    <>
      <div className="container">
        <div className="mb-3">
          <label htmlFor="mybox" className="form-label">
            <h3>{props.heading}</h3>
          </label>
          <textarea
            className="form-control"
            value={text}
            id="mybox"
            onChange={handleOnChange}
            rows="8"></textarea>
        </div>

        <h3>Enter Color to Change</h3>
        <input
          type="text"
          placeholder="Enter your Color"
          id="changeColor"
          value={color}
          className="form-control mt-2 mb-3"
          onChange={handleOnColor}
        />

        <div className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleloClick}>
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleClrClick}>
          Clear Text
        </div>
        <div className="btn btn-primary mx-1" onClick={handleCopy}>
          Copy Text
        </div>
        <div className="btn btn-primary mx-1" onClick={handlePaste}>
          Paste Text
        </div>
        <div className="btn btn-primary mx-1" onClick={handleExtraSpace}>
          Remove ExtraSpace
        </div>
        <div className="btn btn-primary mx-1" onClick={handleColor}>
          Change Color
        </div>
      </div>

      <div className="container my-4">
        <h1>Your Text Summary</h1>
        <p>
          Your Word has {text.length} Character & {text.split(" ").length} Words
        </p>
        <p>You Took {0.008 * text.length} minutes to Read summary </p>
        <h1>Preview</h1>
        <p>
          {text.length > 0 ? text : "Enter Some Thing in above box for Preview"}
        </p>
      </div>
    </>
  );
}
