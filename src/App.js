// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [modeColor, setModeColor] = useState("#181818");
  const [btnColor, setBtnColor] = useState("primary");
  const newModeColor = (newColor) => {
    if (mode === "dark") {
      setModeColor(newColor);
      document.body.style.backgroundColor = newColor;
      if (modeColor === "#360000") setBtnColor("danger");
      if (modeColor === "#003623") setBtnColor("success");
      if (modeColor === "#002050") setBtnColor("primary");
      if (modeColor === "#420032") setBtnColor("warning");
    }
  };
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setModeColor("#181818");
      document.body.style.backgroundColor = "#181818";
      showAlert("Dark mode enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Dark mode disabled.", "success");
    }
    // if(mode === "dark"){
    // }
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          newModeColor={newModeColor}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="Enter the text here to analyze:"
                  modeColor={modeColor}
                  btnColor={btnColor}
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}
<>
  {/* <div classNameName="App">
  <header classNameName="App-header">
    <img src={logo} classNameName="App-logo" alt="logo" />
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
    <a
      classNameName="App-link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
</div> */}
</>;

export default App;
