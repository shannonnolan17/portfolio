import React, { Component } from 'react';
import '../Contact.css';


class Contact extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="title-font-contact">Want me to build you something or want to contact me?</h1>
        <div className="button-wrapper">
          <a href="mailto:smnolan7@gmail.com" className="email-button">Email Me <span class="arrow-right">→</span></a>
        </div>
      </div>
    );
  }
}

export default Contact;