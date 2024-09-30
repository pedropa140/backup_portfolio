import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>A description of your project goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>A description of your project goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 3</h3>
          <p>A description of your project goes here.</p>
        </div>
        <div className="project-card">
          <h3>Project 4</h3>
          <p>A description of your project goes here.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
