import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Title from './components/Title';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section className="container">
          <Navbar />
        </section>

        <section className="container">
          <Title />
        </section>
      </div>
    );
  }
}

export default App;
