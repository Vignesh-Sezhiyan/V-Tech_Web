import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <i class="fa-brands fa-vimeo-v ms-5"></i>
        <div className="me-auto">
          <Link class="navbar-brand" to="/">
            <h2 className="ms-1 mt-2">Technologies</h2>
          </Link>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0 text-center">
            <li class="nav-item me-5 pt-1">
              <NavLink to="/">
                <h6>Home</h6>
              </NavLink>
            </li>
            <li class="nav-item me-5 pt-1">
              <NavLink to="/about">
                About
              </NavLink>
            </li>
            <li class="nav-item me-5 pt-1">
              <NavLink to="/services">
                Services
              </NavLink>
            </li>
            <li class="nav-item me-5 pt-2">
              <NavLink to="/blog">
                <h6>Blog</h6>
              </NavLink>
            </li>
            <li class="nav-item me-5 pt-2">
              <NavLink to="/contact">
                <h6>Contact</h6>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
