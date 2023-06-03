import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="navbar navbar-expand-md navbar-light sticky-top d-print-none">
        <div className="container-xl">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-menu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1>
            <a href=".">
              <img
                src="./logo-text.svg"
                alt="AICTE"
                className="navbar-brand-image"
              />
            </a>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <div className="nav-item d-none d-md-flex ">
              <div>
                <Link to="/login" className="btn btn-outline">
                  Login
                </Link>
                <Link to="/signup" id="register" className="btn outline-none">
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="navbar-expand-md">
        <div className="collapse navbar-collapse" id="navbar-menu">
          <div
            className="navbar navbar-light"
            style={{ backgroundColor: "#f55700" }}
          >
            <div className="container-xl" id="sear">
              <ul className="navbar-nav navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" aria-current="page">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/news" className="nav-link" aria-current="page">
                    Newsroom
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/bureaus" className="nav-link" aria-current="page">
                    Bureaus
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/initiatives"
                    className="nav-link"
                    aria-current="page"
                  >
                    Initiatives
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/schemes"
                    className="nav-link"
                    aria-current="page"
                    href="/schemes"
                  >
                    Schemes
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/education"
                    className="nav-link"
                    aria-current="page"
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/opportunities"
                    className="nav-link"
                    aria-current="page"
                  >
                    Opportunities
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/statistics"
                    className="nav-link"
                    aria-current="page"
                  >
                    Statistics
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/bulletins"
                    className="nav-link"
                    aria-current="page"
                  >
                    Bulletins
                  </Link>
                </li>

                <li id="sig">
                  <Link to="/login">Login</Link>
                  <Link to="/signup" id="register" className="btn btn-outline">
                    Register
                  </Link>
                </li>
              </ul>
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
