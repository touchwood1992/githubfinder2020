import React from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
function Menu() {
  return (
    <Nav className="ml-auto">
      <NavLink exact to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/about" className="nav-link">
        About
      </NavLink>
    </Nav>
  );
}

export default Menu;
