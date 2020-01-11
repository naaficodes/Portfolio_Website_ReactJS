import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sidebar from './sections/Sidebar';
import Home from './sections/Home';
import About from './sections/About';


function App() {
  return (
    <Router>
      <div className="App">
      <Sidebar />
        <Route exact path="/">
      <Home />
      </Route>
      <Route path="/about">
      <About />
      </Route>

      </div>
    </Router>
  );
}

export default App;
