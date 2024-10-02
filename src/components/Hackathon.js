import React from 'react';
import './Hackathon.css';

function Hackathon() {
  // Define the hackathons JSON array with links, technologies, and hackathon names
  const hackathons = [
    {
      id: "dragonhacks2024",
      title: "PEEK Student",
      hackathonName: "DragonHacks 2024",
      winner: true,
      description: "Inspired by Rate My Professor, we integrated AI to recommend the best professors for you based on your preferences. We also made a student platform to make scheduling and studying much easier for students.",
      link: "https://devpost.com/software/peek-student",
      technologies: "Python, Flask, HTML, CSS, JavaScript, Discord API, Google Calendar, Gemini AI, SQL, MongoDB",
    },
    {
      id: "hackprinceton2024",
      title: "NewLeaf",
      hackathonName: "HackPrinceton Spring 2024",
      winner: true,
      description: "NewLeaf is a Flask web application that aims to streamline various aspects of student life. NewLeaf offers an AI chatbot for academic assistance, a smart schedule maker/calendar for task organization, a PDF summarizer for condensing lengthy documents, a computer vision hand-tracking canvas for interactive learning, and much more. The platform acts as a one-stop solution for students, providing a variety of tools to help them along their academic journey.",
      link: "https://devpost.com/software/newleaf",
      technologies: "Python, Flask, HTML, CSS, JavaScript, Discord API, Google Calendar, Gemini AI, SQL",
    },
    {
      id: "hackru2024",
      title: "Green Habits",
      hackathonName: "HackRU Spring 2024",
      winner: true,
      description: "In the face of rising temperatures and growing climate challenges, we're compelled to act. With our expertise in Computer Science, we're believed that we could identify a solution in the form of a website to help people become aware of more sustainable lifestyle practices. Our goal is simple: to use technology for a sustainable future and raise awareness of climate change organized events. Join us in making a difference and protecting our planet.",
      link: "https://devpost.com/software/green-habits",
      technologies: "Python, Flask, HTML, CSS, JavaScript, Discord API, Google Calendar, Gemini AI, SQL, Firebase",
    },
    {
      id: "ruieee2024",
      title: "DRC - Empowering Innovations",
      hackathonName: "RUIEEE Spring 2024",
      winner: true,
      description: "DRC - Empowering Innovations allows women to log in and communicate with other women in the STEM field and allows them to link with their email. In addition, it allows them to communicate with an AI (Google's Gemini GenAI) and helps schedule their tasks throughout the day. They can also communicate with an AI to ask it questions about women in the STEM field. There is also an events page where they can find women empowerment events and add them to their schedule.",
      link: "https://devpost.com/software/drc-hack",
      technologies: "Python, Flask, HTML, CSS, JavaScript, Discord API, Google Calendar, Gemini AI, SQL",
    },
    {
      id: "hackhers2024",
      title: "BalancSync",
      hackathonName: "HackHERS 2024",
      winner: true,
      description: "BalanSync is an application designed to streamline task management and boost productivity. Users input their daily tasks, and the app utilizes Gemini AI to generate an optimized schedule. Leveraging the Google Calendar API, the app seamlessly integrates these events into the user's calendar. Additionally, BalanSync offers valuable advice on productivity and burnout prevention, ensuring users maintain a healthy work-life balance.",
      link: "https://devpost.com/software/balancsync",
      technologies: "Python, Flask, HTML, CSS, JavaScript, Discord API, Google Calendar, Gemini AI, SQL",
    },
  ];

  return (
    <section id="hackathon" className="hackathon-section">
      <h2>Hackathons</h2>
      <div className="hackathon-container">
        {hackathons.map((hackathon) => (
          <div key={hackathon.id} className="hackathon-card">
            <h3>
            <span className="hackathon-title">{hackathon.title}</span>
              {" - "}
              <span className="hackathon-name">{hackathon.hackathonName}{" "}</span>
              {hackathon.winner && <span className="winner-label">Winner</span>}
            </h3>
            <p className="technologies">{hackathon.technologies}</p>
            <p>{hackathon.description}</p>
            <div className="project-link-container"> {/* New wrapper div */}
              <a href={hackathon.link} target="_blank" rel="noopener noreferrer" className="project-link">
                Click Here to View Project &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hackathon;
