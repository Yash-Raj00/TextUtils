import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

export default function Navbar(props) {
  const handleRedClick = ()=>{
    props.newModeColor('#360000');
  }
  const handleGreenClick = ()=>{
    props.newModeColor('#003623');
  }
  const handleBlueClick = ()=>{
    props.newModeColor('#002050');
  }
  const handlePinkClick = ()=>{
    props.newModeColor('#420032');
  }
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.aboutText}
                </Link>
              </li>
            </ul>
            {/* <div className="palets navbar-nav mb-2 mx-3 mb-lg-0">
              <ul
                className="navbar-nav me-auto mb-2 mb-lg-0"
                style={{ listStyle: "none", margin: "0" }}
              >
                <li
                  className="nav-item"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "red",
                    border: `1px solid ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    borderRadius: "50%",
                    boxShadow: `0px 0px 3px ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    width: "20px",
                    height: "20px",
                    margin: '8px',
                  }}
                  onClick={handleRedClick}
                />
                <li
                  className="nav-item"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "green",
                    border: `1px solid ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    borderRadius: "50%",
                    boxShadow: `0px 0px 3px ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    width: "20px",
                    height: "20px",
                    margin: '8px',
                  }}
                  onClick={handleGreenClick}
                />
                <li
                  className="nav-item"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "blue",
                    border: `1px solid ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    borderRadius: "50%",
                    boxShadow: `0px 0px 3px ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    width: "20px",
                    height: "20px",
                    margin: '8px',
                  }}
                  onClick={handleBlueClick}
                />
                <li
                  className="nav-item"
                  style={{
                    cursor: "pointer",
                    backgroundColor: "pink",
                    border: `1px solid ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    borderRadius: "50%",
                    boxShadow: `0px 0px 3px ${props.mode === 'light' ? 'rgb(0 20 50)' : 'white'}`,
                    width: "20px",
                    height: "20px",
                    margin: '8px',
                  }}
                  onClick={handlePinkClick}
                />
              </ul>
            </div> */}
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Enable DarkMode
              </label>
            </div>
            <>
              {/* <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form> */}
            </>
          </div>
        </div>
      </nav>
    </>
  );
}
// style={{listStyle: 'none'}}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set title here",
  aboutText: "About",
};
<>
  {/* <li className="nav-item dropdown">
<a
className="nav-link dropdown-toggle"
href="/"
role="button"
data-bs-toggle="dropdown"
aria-expanded="false"
>
Dropdown
</a>
<ul className="dropdown-menu">
<li>
<a className="dropdown-item" href="/">
Action
    </a>
    </li>
    <li>
    <a className="dropdown-item" href="/">
    Another action
    </a>
    </li>
    <li>
    <hr className="dropdown-divider" />
    </li>
    <li>
    <a className="dropdown-item" href="/">
    Something else here
    </a>
    </li>
    </ul>
    </li>
    <li className="nav-item">
    <a
    className="nav-link disabled"
    href="/"
    tabIndex="-1"
    aria-disabled="true"
    >
    Disabled
    </a>
  </li> */}
</>;
