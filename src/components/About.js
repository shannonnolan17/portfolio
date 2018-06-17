import React, { Component } from 'react';
import '../About.css';

class About extends Component {
  render() {
    return (
      <div className="inner-container">
        <h3 className="title-font">About</h3>
        <p className="p-font">I am a former teacher turned techie that noticed that I always loved bringing technology into the classroom and that my favorite days were the ones that I could play around with the latest educational technology tools. So I packed my things and headed to San Francisco to attend DevBootcamp. You can check out my latest work history on my LinkedIn. When I'm not learning something new, I love to hike and take pictures or work on my many side projects found on my Github.</p>

        <h3 className="title-font">Projects</h3>
        <p className="p-font">I am a former teacher turned techie that loves all things web development. I noticed that I always loved bringing technology into the classroom and that my favorite days were the ones that I could play around with the latest educational technology tools. So in June of 2017 I decided I wanted to do a coding bootcamp after talking with a couple friends who went through similar programs. In my research, I came across DevBootcamp and instantly knew that was where I wanted to go. I applied, got in, and traveled to San Francisco in order to complete the program in November of 2017. As the last cohort of DevBootcamp, I had the unique opportunity to stay for a couple extra weeks and complete two final projects. It has been a whirlwind experience but definitely the best decision of my life.</p>
      </div>
    );
  }
}

export default About;