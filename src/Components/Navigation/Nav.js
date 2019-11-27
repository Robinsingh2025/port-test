import React from "react";
import "./Nav.css";
import { Paper, Tabs, Tab } from "@material-ui/core";
import Computer from "@material-ui/icons/Computer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navBar">
      <Link to="/">
        <div>{<Computer fontSize="large" color="action" />}</div>
      </Link>

      <ul className="navLinks">
        <Link to="/about">
          <li>About</li>
        </Link>

        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/contact">
          <li>Contact Me</li>
        </Link>
      </ul>
    </nav>
  );
}
