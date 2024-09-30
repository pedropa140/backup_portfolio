import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  // State to control modal visibility and content
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'BeReal-Bot',
      description: 'A bot that helps schedule BeReal photos.',
      images: [
        'path-to-image/bereal-bot-1.png',
        'path-to-image/bereal-bot-2.png'
      ],
      date: 'August 2023'
    },
    {
      title: 'Reminder-Bot',
      description: 'A bot that reminds you about your tasks.',
      images: [
        'path-to-image/reminder-bot-1.png',
        'path-to-image/reminder-bot-2.png'
      ],
      date: 'June 2023'
    },
    {
      title: 'FaceDigitClassification',
      description: 'A project for classifying digits using face recognition.',
      images: [
        'path-to-image/facedigit-classification-1.png',
        'path-to-image/facedigit-classification-2.png'
      ],
      date: 'January 2024'
    },
    {
      title: 'PhotoAlbum Application',
      description: 'An app to store and manage your photo albums.',
      images: [
        'path-to-image/photoalbum-application-1.png',
        'path-to-image/photoalbum-application-2.png',
        'path-to-image/photoalbum-application-3.png'
      ],
      date: 'March 2022'
    }
  ];

  const openModal = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card" onClick={() => openModal(project)}>
            <h3>{project.title}</h3>
            <p className="project-date"><strong>Date:</strong> {project.date}</p>
            <p>{project.description.substring(0, 50)}...</p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title}</h2>
            <p className="project-date"><strong>Created:</strong> {selectedProject.date}</p>
            <div className="modal-images">
              {selectedProject.images.map((image, index) => (
                <img key={index} src={image} alt={`${selectedProject.title} ${index + 1}`} />
              ))}
            </div>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
