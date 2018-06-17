import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">
        <h3 className="title-font">About</h3>
        <p className="p-font">I am a former elementary school teacher turned techie that noticed that I always loved bringing technology into the classroom. So I packed my things and headed to San Francisco to attend DevBootcamp where my passion for coding expanded. I am currently doing part-time work with SenYours(an app to connect seniors to their community) and I am a Salesforce Guru at the Columbus Organization. You can check out my latest work history on my <a href="https://www.linkedin.com/in/shannonnolan/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my <a href="https://github.com/shannonnolan17" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend) role in San Francisco.</p>

        <h3 className="title-font">Projects</h3>
        <h4 className='subtitle'>Forever Aloaner</h4>
        <p className="p-font">Forever Aloaner is a full rails web application that allows users to interact, chat, loan, and borrow items from one another.</p>
      </div>
    );
  }
}

export default About;