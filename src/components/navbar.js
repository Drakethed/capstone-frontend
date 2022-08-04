import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">The Dark Collection!!</h1>
      <div className="navbar-links">
        <NavLink
          exact
          className="navbar-link"
          activeClassName="selected"
          to="/"
        >
          Home
        </NavLink>
        <NavLink className="navbar-link" activeClassName="selected" to="/about">
          About
        </NavLink>
        <NavLink
          className="navbar-link"
          activeClassName="selected"
          to="/add-movie"
        >
          Add a Movie!
        </NavLink>
      </div>
    </div>
  );
}
