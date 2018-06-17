import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">
        <h3 className="title-font">About</h3>
        <p className="p-font">I am a former elementary school teacher turned techie that noticed that I always loved bringing technology into the classroom. So I packed my things and headed to San Francisco to attend DevBootcamp where my passion for coding expanded. I am currently doing part-time work with SenYours(an app to connect seniors to their community) and I am a Salesforce Guru at the Columbus Organization. You can check out my latest work history on my <a href="https://www.linkedin.com/in/shannonnolan/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my <a href="https://github.com/shannonnolan17" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend) role in San Francisco.</p>

        <h3 className="title-font">Projects</h3>
        <h4 className='subtitle'>FOREVER ALOANER</h4>
        <p className="p-font">This <a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">project</a> is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. You can<a href="https://github.com/shannonnolan17/foreveraloaner-rails" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
        <img className="container about-pic" src={require('./landing-page.png')} alt="Photo by Thomas Verbruggen on Unsplash"/>

        <h3 className="title-font">Projects</h3>
        <h4 className='subtitle'>GOOD GRIEF</h4>
        <p className="p-font">This <a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">project</a> is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. You can<a href="https://github.com/shannonnolan17/foreveraloaner-rails" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
        <img className="container about-pic" src={require('./landing-page.png')} alt="Photo by Thomas Verbruggen on Unsplash"/>
      </div>
    );
  }
}

export default About;