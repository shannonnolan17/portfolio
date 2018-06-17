import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">
        <h3 className="title-font">About</h3>
        <p className="p-font">I am a former elementary school teacher turned techie that noticed that I always loved bringing technology into the classroom. So I packed my things and headed to San Francisco to attend DevBootcamp where my passion for coding expanded. I am currently doing part-time work with SenYours(an app to connect seniors to their community) and I am a Salesforce Guru at the Columbus Organization. You can check out my latest work history on my <a href="https://www.linkedin.com/in/shannonnolan/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my <a href="https://github.com/shannonnolan17" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend) role in San Francisco.</p>

        <h3 className="title-font">Projects</h3>
        <p className="p-font">I am a former teacher turned techie that loves all things web development. I noticed that I always loved bringing technology into the classroom and that my favorite days were the ones that I could play around with the latest educational technology tools. So in June of 2017 I decided I wanted to do a coding bootcamp after talking with a couple friends who went through similar programs. In my research, I came across DevBootcamp and instantly knew that was where I wanted to go. I applied, got in, and traveled to San Francisco in order to complete the program in November of 2017. As the last cohort of DevBootcamp, I had the unique opportunity to stay for a couple extra weeks and complete two final projects. It has been a whirlwind experience but definitely the best decision of my life.</p>
      </div>
    );
  }
}

export default About;