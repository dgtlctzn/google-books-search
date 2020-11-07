import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper teal darken-1">
        <Link to="/" className="brand-logo center hide-on-med-and-down">
          Google Books Search
        </Link>
        <ul id="nav-mobile" className="left">
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
