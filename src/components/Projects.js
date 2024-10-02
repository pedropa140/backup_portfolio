import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  // State to control modal visibility and content
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: 'BeReal-Bot',
      description: '<p><strong>BeReal-Bot</strong> is designed to capture authentic moments, just like the BeReal app. Every day, at a random time, you’ll be prompted to share a photo that showcases your true self—no filters, no edits.<br><strong>How It Works |</strong>\n<strong>Random Moment:</strong>\nYou’ll receive a notification at a surprise time.\n<strong>Snap a Pic:</strong>\nYou’ll have 2 minutes to take a photo of what you’re doing right at that moment. It’s all about being real!\n<strong>Share & Connect:</strong>\nAfter you snap your pic, you can share them with friends and see their moments too. Let’s keep it genuine!</p>',
      images: [
        '/Images/Projects/bereal-bot-1.png',
        '/Images/Projects/bereal-bot-2.png'
      ],
      date: 'July 2024',
      technologies: ['Python', 'Discord API', 'SQL']
    },
    {
      title: 'Reminder-Bot',
      description: '<p><strong>Reminder-Bot</strong> is a Discord bot that allows users to keep track of what tasks they have throughout the week or even today. In addition, if the user is in the database, it tells you what tasks you planned on that given day by sending you a direct message. This bot uses a database coded in <strong>SQL</strong> and keeps track of the user and their preference when they want to be messaged in the morning. In addition, it keeps track of the user\'s task and if they are completed or not.</p>',
      images: [
        '/Images/Projects/reminder-bot-1.png',
        '/Images/Projects/reminder-bot-2.png'
      ],
      date: 'April 2024',
      technologies: ['Python', 'Discord API', 'SQL', 'Google Calendar API']
    },
    {
      title: 'FaceDigitClassification',
      description: '',
      images: [
        // '/Images/Projects/facedigit-classification-1.png',
        // '/Images/Projects/facedigit-classification-2.png'
      ],
      date: 'May 2023',
      technologies: ['Python']
    },
    {
      title: 'PhotoAlbum Application',
      description: '',
      images: [
        // '/Images/Projects/photoalbum-application-1.png',
        // '/Images/Projects/photoalbum-application-2.png',
        // '/Images/Projects/photoalbum-application-3.png'
      ],
      date: 'May 2022',
      technologies: ['Java', 'JavaFX']
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
            <h3>{project.title} <span className="technologies">({project.technologies.join(', ')})</span></h3>
            <p className="project-date"><strong>Date:</strong> {project.date}</p>
            {/* Display a truncated version of the HTML description */}
            <div
              className="project-description"
              dangerouslySetInnerHTML={{ __html: project.description.substring(0, 75) + '...' }}
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={closeModal}>&times;</span>
            <h2>{selectedProject.title} <span className="technologies">({selectedProject.technologies.join(', ')})</span></h2>
            <p className="project-date"><strong>Created:</strong> {selectedProject.date}</p>

            {/* Conditionally render the modal-images div if there are images */}
            {selectedProject.images.length > 0 && (
              <div className="modal-images">
                {selectedProject.images.map((image, index) => (
                  <img key={index} src={image} alt={`${selectedProject.title} ${index + 1}`} />
                ))}
              </div>
            )}

            {/* Render HTML description */}
            <div className="project-description" dangerouslySetInnerHTML={{ __html: selectedProject.description }} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
