import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log(newText);
  };

  const handleloClick = () => {
    let newText = text.toLocaleLowerCase();
    setText(newText);
    // console.log(newText);
  };

  const handleClrClick = () => {
    let newText = "";
    setText(newText);
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
    console.log(text);
  };

  const [text, setText] = useState("");
  //   setText("Hey New Text");
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
        <div className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleloClick}>
          Convert to LowerCase
        </div>
        <div className="btn btn-primary mx-1" onClick={handleClrClick}>
          Clear
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
