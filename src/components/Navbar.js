import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <>
      <div>
        <nav
          // className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
          className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
          <Link className="navbar-brand" to="/">
            {props.heading}
          </Link>
          {/* <a className="navbar-brand" href="/">
            {props.heading}
          </a> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                {/* <a className="nav-link" href="/">
                  {props.home} <span className="sr-only">(current)</span>
                </a> */}
                <Link className="nav-link" to="/">
                  {props.home} <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/">
                  {props.about}
                </a> */}
                <Link className="nav-link" to="/About">
                  {props.about}
                </Link>
              </li>
            </ul>

            <div className="btn btn-info mx-1" onClick={props.changeColorInfo}>
              {props.c1} Mode
            </div>
            <div
              className="btn btn-success mx-1"
              onClick={props.changeColorSuccess}>
              {props.c2} Mode
            </div>
            <div
              className="btn btn-secondary mx-1"
              onClick={props.changeColorSecondary}>
              {props.c3} Mode
            </div>

            {/* <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
                onClick={props.toggleMode}>
                Disable {props.mode} Mode
              </button>
            </form> */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                onClick={props.toggleMode}
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault">
                Disable {props.mode} Mode
              </label>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

Navbar.propTypes = {
  heading: PropTypes.string,
  home: PropTypes.string.isRequired,
  about: PropTypes.string,
};

Navbar.defaultProps = {
  heading: "This is default",
  home: "Home",
  about: "About",
};
