import React from 'react';
import './Hackathon.css';

function Hackathon() {
  return (
    <section id="hackathon" className="hackathon-section">
      <h2>Hackathon Projects</h2>
      <div className="hackathon-container">
        <div className="hackathon-card">
          <h3>Hackathon Project 1</h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
        <div className="hackathon-card">
          <h3>Hackathon Project 2</h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hackathon;
