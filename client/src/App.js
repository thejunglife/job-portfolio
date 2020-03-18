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
      <NavBar />
      <div>
        <section id="/">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="resume">
          <Resume />
        </section>
        <section id="contact">
          <Contact />
        </section>
          <Footer />
      </div>
    </Router>
  );
}

export default App;