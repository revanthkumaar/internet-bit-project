import React from "react";
import PropTypes from "prop-types";

const Header = ({ newBook }) => (
  <header className="header">
    <h1> Book Info</h1>{" "}
  </header>
);

Header.propTypes = {
  newBook: PropTypes.func.isRequired,//dont accept if the value of newbook is null
};

export default Header;
