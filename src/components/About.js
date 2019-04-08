import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">

        <div className="project-sections">
          <h3 className="title-font">About</h3>
          <p className="p-font">I am a former elementary school teacher turned techie that noticed that I always loved bringing technology into the classroom. So I packed my things and headed to San Francisco to attend DevBootcamp where my passion for coding expanded. I have experience working as a full-time fullstack Software Engineer at HomeShare which works to make living affordable for everyone. I have also done part-time work as a Software Engineer at SenYours(an app to connect seniors to their community) and I am a Salesforce Guru at the Columbus Organization. You can check out my latest work history on my <a href="https://www.linkedin.com/in/shannonnolan/" target="_blank" className="link-color">Linkedin</a>. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my <a href="https://github.com/shannonnolan17" target="_blank" className="link-color">GitHub</a>. Currently, I am looking for a full-stack(or frontend/ backend) role in San Francisco.</p>
        </div>

        <h3 className="title-font">Things I've worked on</h3>

        <div className="project-sections">
          <h2 className='subtitle'>HomeShare</h2>
          <p className="p-font"><a href="https://www.hoemshare.com" target="_blank" className="link-color">HomeShare</a> is an online housing marketplace that partners with owners of luxury buildings to make multi-bedroom apartments available to multiple people in order to facilitate affordable city living. In this role I write code and play a key role in the execution of initiatives whose purpose is to optimize and streamline processes. I worked on several client facing projects including redesigning our landing page with unit types which included a substantial backend change in order to be supported. I also streamlined the billing portal with the latest design for over 50 employees. I worked in a rails backend and react frontend to overhaul the old website and create a new sleek design. </p>
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img className="about-pic" src={require('./unit-types.png')}/>
          </div>
          <div className="col-xs-12 col-md-6">
            <img className="about-pic" src={require('./promotions.png')}/>
          </div>
        </div>
        </div>
        <div className="project-sections">
          <h2 className='subtitle'>SENYOURS</h2>
          <p className="p-font"><a href="https://senyours.io" target="_blank" className="link-color">Senyours</a> connects senior adults with veriﬁed, background checked local citizens in their community. For an affordable rate, our Companions help seniors with their daily activities shopping, laundry, and medical appointments. Companions are also happy to join you on walks, meals, and outings. As a Software Engineer for Senyours, I designed several aspects of the site including the 'How it Works' section and the 'What People are Saying' section as seen below:</p>
          <div className="row">
            <div className="col">
              <img className="container about-pic" src={require('./senyours.png')}/>
            </div>
            <div className="col">
              <img className="container about-pic" src={require('./howworks.png')}/>
            </div>
          </div>
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>FOREVER ALOANER</h2>
          <p className="p-font"><a href="https://foreveraloaner.herokuapp.com/" target="_blank" className="link-color">Forever Aloaner</a> is a full rails web application that allows users to interact, chat, loan, and borrow items from one another. It's like a Craigslist for borrowing things! You can<a href="https://github.com/shannonnolan17/foreveraloaner-rails" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./landing-page.png')} />
        </div>

        <div className="project-sections">
          <h2 className='subtitle'>GOOD GRIEF</h2>
          <p className="p-font">Good Grief is a mobile-first web application that strives to assist people move through the five stages of grief after a relationship dissolution. It aims to facilitate the process of healing from a broken heart by providing a collection of resources specifically tailored to each stage, as well as a safe environment to connect with others going through similar experiences. You can<a href="https://github.com/shannonnolan17/good-grief-front" target="_blank" className="link-color"> check it out</a> on GitHub!</p>
          <img className="container about-pic" src={require('./user_page_1.png')}/>
        </div>
      </div>
    );
  }
}

export default About;
