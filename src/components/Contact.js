import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Email: <span style={{color: "#f09a36"}}>pedropa140@gmail.com</span></p>
      <p><img src="/Images/Contact/LinkedIn_logo.png" alt="LinkedIn"></img>:<a href="https://www.linkedin.com/in/pedro-pajarillo-jr" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/pedro-pajarillo-jr</a>
      <img src="/Images/Contact/Github_logo.png" alt="Github"></img>:<a href="https://github.com/pedropa140" target="_blank" rel="noopener noreferrer">https://github.com/pedropa140</a>
      <img src="/Images/Contact/Devpost_logo.png" alt="Devpost"></img>:<a href="https://devpost.com/pedropa140" target="_blank" rel="noopener noreferrer">https://devpost.com/pedropa140</a></p>
    </section>
  );
}

export default Contact;
