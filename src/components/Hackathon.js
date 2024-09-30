import React from 'react';
import './Hackathon.css';

function Hackathon() {
  return (
    <section id="hackathon" className="hackathon-section">
      <h2>Hackathons</h2>
      <div className="hackathon-container">
        <div className="hackathon-card">
          <h3>
            DragonHacks 2024 <span className="winner-label">Winner</span>
          </h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
        <div className="hackathon-card">
          <h3>
            HackPrinceton Spring 2024 <span className="winner-label">Winner</span>
          </h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
        <div className="hackathon-card">
          <h3>
            HackRU Spring 2024 <span className="winner-label">Winner</span>
          </h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
        <div className="hackathon-card">
          <h3>
            RUIEEE Spring Hackathon 2024 <span className="winner-label">Winner</span>
          </h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
        <div className="hackathon-card">
          <h3>
            HackHERS 2024 <span className="winner-label">Winner</span>
          </h3>
          <p>
            Description of the project built during the hackathon, technologies used, and the outcome.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hackathon;
