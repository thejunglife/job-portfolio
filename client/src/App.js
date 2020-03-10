import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Resume from './Pages/Resume'
import Contact from './Pages/Contact'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import './app.css'

const App = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <NavBar />
          <Home />
          <Footer />
        </Route>
        <Route path="/about">
          <NavBar />
          <About />
          <Footer />
        </Route>
        <Route path="/portfolio">
          <NavBar />
          <Portfolio />
          <Footer />
        </Route>
        <Route path="/resume">
          <NavBar />
          <Resume />
          <Footer />
        </Route>
        <Route path="/contact">
          <NavBar />
          <Contact />
          <Footer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;