import React from "react";
import { Navbar } from "react-bootstrap";
import PropTypes from "prop-types";

function Logo({ tagLine, icon }) {
  return (
    <Navbar.Brand>
      {`${tagLine} `}
      <i className={`fa ${icon}`}></i>
    </Navbar.Brand>
  );
}
Logo.propTypes = {
  tagLine: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
Logo.defaultProps = {
  tagLine: "Github Finder",
  icon: "fa-github",
};
export default Logo;
