import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="logo" onClick={scrollToTop}>PEDRO PAJARILLO JR.</h1>
        <ul className={isOpen ? 'navbar-links active' : 'navbar-links'}>
          <li>
            <a href="#about" onClick={(e) => {
              e.preventDefault();
              scrollToSection('about');
            }}>
              ABOUT
            </a>
          </li>
          <li>
            <a href="#education" onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}>
              EDUCATION
            </a>
          </li>
          <li>
            <a href="#experience" onClick={(e) => {
              e.preventDefault();
              scrollToSection('experience');
            }}>
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#projects" onClick={(e) => {
              e.preventDefault();
              scrollToSection('projects');
            }}>
              PROJECTS
            </a>
          </li>
          <li>
            <a href="https://github.com/pedropa140" target="_blank" rel="noopener noreferrer">
              GITHUB <span className="new-tab-icon">🔗</span>
            </a>
          </li>
          <li>
            <a href="https://devpost.com/pedropa140" target="_blank" rel="noopener noreferrer">
              DEVPOST <span className="new-tab-icon">🔗</span>
            </a>
          </li>
          <li>
            <a href="#hackathon" onClick={(e) => {
              e.preventDefault();
              scrollToSection('hackathon');
            }}>
              HACKATHON
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pedro-pajarillo-jr/" target="_blank" rel="noopener noreferrer">
              LINKEDIN <span className="new-tab-icon">🔗</span>
            </a>
          </li>
          <li>
            <a href="#resume" onClick={(e) => {
              e.preventDefault();
              scrollToSection('resume');
            }}>
              RESUME
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}>
              CONTACT
            </a>
          </li>
        </ul>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
          <div className={`line ${isOpen ? 'open' : ''}`}></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
