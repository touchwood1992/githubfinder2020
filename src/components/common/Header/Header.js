import React from "react";
import { Navbar } from "react-bootstrap";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";
function Header() {
  return (
    <header id="website-header">
      <Navbar bg="danger" variant="dark">
        <Logo></Logo>
        <Menu></Menu>
      </Navbar>
    </header>
  );
}

export default Header;
