import React from "react";

import "./App.css";
import About from "./Components/About/About";
import Nav from "./Components/Navigation/Nav";
import Contact from "./Components/ContactMe/About";
import Portfolio from "./Components/Portfolio/Portfolio";
import FortNite from "./Components/FortNite/Fortnite";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
            {Home}
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/fortnite">
            <FortNite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default App;
