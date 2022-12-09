import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    // console.log("Up");
    // console.log(newText);
  };
  const handleOnChange = (e) => {
    // text = text.toUpperCase();
    // console.log("OnChange");
    setText(e.target.value);
    console.log(text);
  };

  const [text, setText] = useState("Enter Text Here...");
  //   setText("Hey New Text");
  return (
    <div className="container">
      <div className="mb-3">
        <label htmlFor="mybox" className="form-label">
          <h3>
            {props.heading} - {text}
          </h3>
        </label>
        <textarea
          className="form-control"
          value={text}
          id="mybox"
          onChange={handleOnChange}
          rows="3"></textarea>
      </div>
      <div className="btn btn-primary" onClick={handleUpClick}>
        Convert to UpperCase
      </div>
    </div>
  );
}
