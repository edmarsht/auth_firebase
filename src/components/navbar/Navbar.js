import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>Auth-Firebase</h1>
      </Link>
      <div className="navbar__button">
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
        <Link to="/signin">
          <button>Sign in</button>
        </Link>
        <Link to="/logout">
          <button className="color__logout">Log out</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
