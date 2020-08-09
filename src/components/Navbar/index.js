import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/">
          Movie list with year filter
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/myList">
          My List
        </Link>
      </li>
    </ul>
  );
}
