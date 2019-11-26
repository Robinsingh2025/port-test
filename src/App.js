import React from 'react';
import About from './Pages/About/About';
import Nav from './Components/Navigation/Nav';
import Portfolio from './Pages/Portfolio/Portfolio';
import Contact from './Pages/ContactMe/About';
import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
