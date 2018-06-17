import React, { Component } from 'react';
import '../Title.css';


class Title extends Component {
  render() {
    return (
      <div className="">
        <div className="container">
          <h1 className="title">Hello, my name is Shannon. I am a Developer living in San Francisco, CA.</h1>
        </div>
        <div className="container-flex">
          <img className="title-pic" src={require('./leaves.jpg')} alt="Photo by Thomas Verbruggen on Unsplash"/>
        </div>
      </div>
    );
  }
}

export default Title;