import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">

        <div className="project-sections">
          <h3 className="title-font">About</h3>
          <p className="p-font">I am a former elementary school teacher turned techie that noticed that I always loved bringing technology into the classroom. So I packed my things and headed to San Francisco to attend DevBootcamp where my passion for coding expanded. I am currently doing part-time work as a Software Engineer at SenYours(an app to connect seniors to their community) and I am a Salesforce Guru at the Columbus Organization. You can check out my latest work history on my <a href="https://www.linkedin.com/in/shannonnolan/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my <a href="https://github.com/shannonnolan17" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend) role in San Francisco.</p>
        </div>

        <div className="project-sections">
          <h3 className="title-font">Projects</h3>
          <h2 className='subtitle'>FOREVER ALOANER</h2>
          <p className="p-font"><a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">Forever Aloaner</a> is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. It's like a Craigslist for borrowing things! You can<a href="https://github.com/shannonnolan17/foreveraloaner-rails" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./landing-page.png')} />
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>GOOD GRIEF</h2>
          <p className="p-font">Good Grief is a mobile-first web application that strives to assist people move through the five stages of grief after a relationship dissolution. It aims to facilitate the process of healing from a broken heart by providing a collection of resources specifically tailored to each stage, as well as a safe environment to connect with others going through similar experiences. You can<a href="https://github.com/shannonnolan17/good-grief-front" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./home_page.png')} alt="Photo by Thomas Verbruggen on Unsplash"/>
        </div>
      </div>
    );
  }
}

export default About;