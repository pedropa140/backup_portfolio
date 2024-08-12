import React from 'react';
import aboutImage from '../assets/aboutme_section/aboutme.jpg';
import './AboutMe.css';

const AboutSection = () => {
  return (
    <section id="about">
      <div className="about-image">
        <img src={aboutImage} alt="Pedro Pajarillo Jr." />
      </div>
      <div className="about-text">
        <h2>ABOUT ME</h2>
        <p>
          Hello! My name is <span className='p_name'>Pedro Pajarillo Jr.</span> and I am a recent graduate of Rutgers University, The State University of New Jersey. I majored in Computer Science, focusing on systems and software development, computer security, and <br />artificial intelligence. I am an avid hackathon participant and have competed in <span className='p_number'>7</span> hackathons, winning <span className='p_number'>5</span> of them consecutively and securing <span className='p_number'>6</span> category wins.
        </p>
        <p>
          I worked at Rutgers University as an iLab/Computer Science Tutor at the CAVE (Collaborative Academic Versatile Environment) under the Laboratory of Computer Science Research and the Computer Science Department for about a year and a half before being promoted to <span className='p_number'>CAVE Student Manager/Head Computer Science Tutor</span>. In this role, I led and worked with a team of <span className='p_number'>12</span> computer science tutors, helping over <span className='p_number'>70+</span> students in data structures and algorithms each week. I maintained <span className='p_number'>30+</span> Linux servers from the Department of Computer Science, performing troubleshooting and routine maintenance on the machines. Additionally, I led computer science tours alongside the department, welcoming prospective students, and created a clean and welcoming space for both students and professors.
        </p>
        <p>
          Outside of coding, I enjoy spending time with friends, working out at the gym, experimenting with new recipes in the kitchen, and playing/watching soccer. I am a die heart <nobr>F.C. Barcelona</nobr> supporter and loves to play Football Manager with them. I tend to cook Italian cuisines and love recreating dishes from any YouTube videos.
        </p>
      </div>
    </section>
  );
}

export default AboutSection;
