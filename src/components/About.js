import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <div className="about-text">
          <img src="/Images/About/About_Image.jpg" alt="Profile" className="about-image" />
          <p>
            Hello! My name is <span className='about-span'>Pedro Pajarillo Jr.</span> and I am a recent graduate of Rutgers University-New Brunswick. With a computer science major and cognitive science minor, I focused on systems and software development, computer security, and artificial intelligence. I am an avid hackathon participant and have competed in <span className='about-span'>7</span> hackathons, with <span className='about-span'>5</span> consecutive wins and <span className='about-span'>6 category wins</span>.
          </p>
          <p>
            I worked at Rutgers as an iLab/Computer Science Tutor at the <span className='about-span'>CAVE (Collaborative Academic Versatile Environment) </span>under the Laboratory of Computer Science Research and the Computer Science Department for about a year and a half before being promoted to <span className='about-span'>CAVE Student Manager/Head Computer Science Tutor</span>. In this role, I led and worked with a team of 12 computer science tutors to help over 1000+ students in prerequisite computer science courses each semester. As the manager, I also helped maintain and troubleshoot <span className='about-span'>30+ Linux servers</span> owned by the Department of Computer Science. Additionally, I led university tours for prospective computer science students to show safe, welcoming spaces for students to hang out and study.
          </p>
          <p>
            Outside of coding, I enjoy spending time with friends and working out at the gym. I also love playing/watching soccer: I am a die-hard F.C. Barcelona fan and love to play Football Manager. Additionally, I love experimenting with new recipes in the kitchen! My specialty lies in Italian cuisines, which include (but are not limited to) cacio e pepe, penne alla vodka, and carbonara. I also try to recreate dishes from any YouTube videos.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
