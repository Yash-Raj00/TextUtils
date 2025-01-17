import React from "react";

export default function About(props) {

  let myStyle = {
    color: props.mode === "light" ? "#181818" : "white",
    backgroundColor: props.mode === "light" ? "white" : "#181818"
  };

  return (
    <>
      <div className="container" style={myStyle}>
        <h1 className="my-3">About Us</h1>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle}
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong>Analyze your text</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
              TextUtils gives you a way to analyze your text quickly and efficiently. It also provides features to modify the text such as - conversion of cases(upper to lower | lower to upper | inverse), removing extra space, copy the text,
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Free to use</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                TextUtils is a free charachter & word counter tool that provides instant results for a given text. It is the best text analyzer software in the online universe and better than any paid utilities. It also provides features to modify the text such as - conversion of cases(upper to lower | lower to upper | inverse), removing extra space, copy the text,
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button style={myStyle}
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Browser compatible</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body" style={myStyle}>
                This word counter software works in any web browser such as Chrome, Brave, Firefox, Internet Explorer, Safari, Oprea, Yaahoo!, etc. It suits to count characters in facebook, blogs, books, excel documents, pdf documents, essays, letters, posts, etc.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
