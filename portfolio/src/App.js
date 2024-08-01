import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Remove the hash (#) from the URL
    if (window.location.hash) {
      window.history.pushState("", document.title, window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="App">
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>PEDRO PAJARILLO JR.</h1>
        <nav>
          <ul>
            <li><a href="#about">ABOUT ME</a></li> 
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#github">GITHUB</a></li>
            <li><a href="#hackathon">HACKATHON</a></li>
            <li><a href="#devpost">DEVPOST</a></li>
            <li><a href="#linkedin">LINKEDIN</a></li>
            <li><a href="#blog">BLOG</a></li>
            <li><a href="#photos">PHOTOS</a></li>
            <li><a href="https://drive.google.com/file/d/1f99KqNevspssmND79ZDzl73ociKV79nk/view?usp=sharing" target="_blank" rel="noopener noreferrer">RESUME</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </header>
			
      <HeaderSection />
      <AboutMe />
      
      <section id="experience" className="not_completed">
        <h2>EXPERIENCE</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <Projects />

      <section id="github" className="not_completed">
        <h2>GITHUB</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <section id="hackathon" className="not_completed">
        <h2>HACKATHON</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <section id="devpost" className="not_completed">
        <h2>DEVPOST</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

			<section id="linkedin" className="not_completed">
        <h2>LINKEDIN</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <section id="blog" className="not_completed">
        <h2>BLOG</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <section id="photos" className="not_completed">
        <h2>PHOTOS</h2>
        <div className="project">
          <p>Coming Soon</p>
        </div>
      </section>

      <section id="contact">
        <h2>CONTACT</h2>
        <p>You can reach me at: <a href="mailto:pedropa140@gmail.com">pedropa140@gmail.com</a></p>
      </section>
    </div>
  );
}

export default App;
