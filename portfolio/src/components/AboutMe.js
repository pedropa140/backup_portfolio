import React from 'react';
import aboutImage from '../assets/aboutme_section/aboutme.jpg';
import './AboutMe.css';

const AboutSection = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-image">
        <img src={aboutImage} alt="Pedro Pajarillo Jr." />
      </div>
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <p>

        </p>
      </div>
    </section>
  );
}

export default AboutSection;
