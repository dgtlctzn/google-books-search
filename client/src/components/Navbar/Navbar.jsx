import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo center">
          Google Books Search
        </Link>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/saved">Saved Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
