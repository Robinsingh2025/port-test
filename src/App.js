import React from 'react';
import About from './Pages/About/About';
import Nav from './Components/Navigation/Nav';

import './App.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
