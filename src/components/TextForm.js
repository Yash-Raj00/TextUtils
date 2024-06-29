import React, { useState } from "react";
export default function TextForm(props) {
  const handleOnChange = (event) => {
    // console.log("On Change.");
    setText(event.target.value);
  };
  const handleUpClick = () => {
    // console.log("Uppercase button was clicked. " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };
  const handleInClick = () => {
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      newText +=
        text[i] === text[i].toUpperCase()
          ? text[i].toLowerCase()
          : text[i].toUpperCase();
    }
    setText(newText);
    props.showAlert("Converted to inversecase!", "success");
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied to clipboard!", "success");
  };
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra space has been removed!", "success");
  };
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text cleared!", "success");
  };
  const wordCount = () => {
    text.trim();
    let dirtyStr = text.split(/\s+/);
    let cleanStr = dirtyStr.filter(function (elem) {
      return elem !== "";
    });
    return cleanStr.length;
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          backgroundColor: props.mode === "light" ? "white" : props.modeColor,
          color: props.mode === "light" ? props.modeColor : "white",
        }}
      >
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            placeholder="Enter text here...."
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor:
                props.mode === "light" ? "white" : "rgb(63 93 139)",
              color: props.mode === "light" ? props.modeColor : "white",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleUpClick}
        >
          UPPERCASE
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleLoClick}
        >
          lowercase
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleInClick}
        >
          InVeRsE
          {/* Ii LlOoVvEe YyOoUu my-1
          OoOoOoOoOo */}
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleCopy}
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleExtraSpace}
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          className={`btn btn-${props.btnColor} mx-1 my-1`}
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          backgroundColor: props.mode === "light" ? "white" : props.modeColor,
          color: props.mode === "light" ? props.modeColor : "white",
        }}
      >
        <h1>Your text summary</h1>
        <p>
          {wordCount()} words ans {text.length} characters.
        </p>
        <p>{0.0036 * wordCount()} Minutes to read.</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Nothing to preview!"}
        </p>
      </div>
    </>
  );
}
