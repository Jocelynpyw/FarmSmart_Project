import React from "react";
import { NavLink } from "react-router-dom";
import "../../Styles/AfterLoginStyles/NavbarStyle.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function Navbar() {
  return (
    <>
      <nav className="container-fluid navbar-container">
        <div className="nav-bar-left">
          <ul className="navbar-left-item">
            {" "}
            <li className="logo-container">
              <Link to="/" className="logo-box">
                <img src="images/LeetCode_logo_rvs.png" id="logo-img" />
              </Link>
            </li>
            <li>
              <NavLink to="#" className="NavLink">
                Explore
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="NavLink">
                Problems
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="NavLink new-section">
                Interview
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="NavLink">
                Contest
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="NavLink">
                Discuss
              </NavLink>
            </li>
            <li>
              <NavLink to="#" className="NavLink" id="store">
                <i class="fas fa-store" style={{ color: "#f9a825" }}></i> Store
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-bar-right">
          <div className="Premium-box">
            {" "}
            <i class="far fa-star"></i> Premium
          </div>
          <span>
            <img
              src="images/LeetCode_Playground.png"
              className="Playground-icon"
              alt="icone de playground"
            ></img>{" "}
          </span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
