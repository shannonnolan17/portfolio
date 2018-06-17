import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import About from './components/About.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container">
          <Navbar />
        </section>

        <section className="">
          <Title />
        </section>

        <section className="container">
          <About />
        </section>
      </div>
    );
  }
}

export default App;
