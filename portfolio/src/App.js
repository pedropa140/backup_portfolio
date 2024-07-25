import React, { useState, useEffect } from 'react';
import './App.css';
import HeaderSection from './components/HeaderSection';
import aboutImage from './assets/images/aboutme.jpg';

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
  };

  return (
    <div className="App">
      <header className={`App-header ${scrolled ? 'scrolled' : ''}`}>
        <h1 onClick={scrollToTop} style={{ cursor: 'pointer' }}>PEDRO PAJARILLO JR.</h1>
        <nav>
          <ul>
            <li><a href="#about">ABOUT ME</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#experience">EXPERIENCE</a></li>
            <li><a href="#github">GITHUB</a></li>
            <li><a href="#hackathon">HACKATHON</a></li>
            <li><a href="#contact">CONTACT</a></li>            
          </ul>
        </nav>
      </header>
      <HeaderSection />
      <section id="about" className="about-section">
        <div className="about-image">
          <img src={aboutImage} alt="Pedro Pajarillo Jr." />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hello! I'm Pedro Pajarillo Jr., a passionate computer science student and software engineer with a keen interest in innovative technology and programming. I specialize in developing web applications, exploring quantum computing, and improving user experiences through clean, effective code.
          </p>
          <p>
            My journey began with a deep curiosity about how things work, leading me to pursue a degree in computer science. Over the years, I've had the opportunity to work on various exciting projects, including developing bots and applications that have helped streamline workflows and enhance user engagement.
          </p>
          <p>
            When I'm not coding, you can find me exploring new technologies, reading up on the latest advancements in AI and quantum computing, or working on personal projects that challenge my skills and creativity. I believe in continuous learning and am always looking for new ways to grow and contribute to the tech community.
          </p>
        </div>
      </section>


      <section id="projects">
        <h2>PROJECTS</h2>
        <div className="project">
          <h3>Green Habits</h3>
          <p>
            Green Habits is an innovative project designed to promote environmentally friendly practices and help users adopt sustainable habits. The application is built using React for the frontend and Node.js for the backend, providing a seamless and interactive user experience. Users can track their daily green habits, set goals, and receive personalized recommendations to improve their environmental footprint.
          </p>
          <p>
            The project incorporates features such as habit tracking, goal setting, and educational resources about sustainable living. The user interface is designed with a focus on simplicity and ease of use, ensuring that users can effortlessly navigate through the application and access the information they need. The backend is powered by a robust API that handles user data, habit tracking, and goal management.
          </p>
          <p>
            One of the key highlights of Green Habits is its community engagement feature, which allows users to connect with others who share similar environmental goals. This feature includes forums, discussion boards, and social sharing options, enabling users to exchange tips, participate in challenges, and support each other in their sustainability journey. The application also integrates with third-party APIs to provide real-time environmental data and insights.
          </p>
          <p>
            The development of Green Habits involved extensive research and collaboration with environmental experts to ensure the accuracy and relevance of the content provided. The project has received positive feedback from users and has been recognized for its contribution to promoting sustainable living practices.
          </p>
        </div>
        <div className="project">
          <h3>Reminder Discord-Bot</h3>
          <p>
            The Reminder Discord-Bot is a versatile and user-friendly bot designed to help users manage their reminders and stay organized within Discord. Built using JavaScript and the Discord.js library, this bot offers a range of features including scheduled reminders, recurring reminders, and customizable notification settings.
          </p>
          <p>
            The bot allows users to create and manage reminders directly from within Discord, using simple commands. Users can set reminders for specific times, intervals, or even recurring events, and receive notifications in their chosen Discord channels. The bot also includes a user-friendly interface for managing reminders, with options to view, edit, and delete existing reminders.
          </p>
          <p>
            Key features of the Reminder Discord-Bot include:
            <ul>
              <li>Customizable reminder messages and notification settings</li>
              <li>Integration with Discord channels for seamless notifications</li>
              <li>Support for multiple users and channels</li>
              <li>Intuitive command structure and easy-to-use interface</li>
            </ul>
          </p>
          <p>
            The Reminder Discord-Bot has been well-received by the Discord community and is used by various servers to improve productivity and organization. The project demonstrates my ability to create functional and engaging applications using modern technologies and frameworks.
          </p>
        </div>
        <div className="project">
          <h3>Gambling Discord-Bot</h3>
          <p>
            The Gambling Discord-Bot is an engaging and interactive bot designed for Discord servers that enjoy gambling and gaming activities. Developed using JavaScript and the Discord.js library, this bot offers a variety of gambling-related features including virtual casino games, betting systems, and leaderboards.
          </p>
          <p>
            The bot provides users with a range of gambling games, such as roulette, blackjack, and slot machines, each with its own set of rules and mechanics. Users can place bets, win virtual currency, and compete with others for top spots on the leaderboards. The bot also includes features for managing virtual currency, tracking bets, and ensuring fair play.
          </p>
          <p>
            Key features of the Gambling Discord-Bot include:
            <ul>
              <li>Various casino-style games with interactive gameplay</li>
              <li>Virtual currency system for betting and rewards</li>
              <li>Leaderboards to track top players and high scores</li>
              <li>Customizable game settings and options</li>
            </ul>
          </p>
          <p>
            The Gambling Discord-Bot has been a popular addition to many gaming and entertainment-focused Discord servers. The project showcases my skills in creating engaging and interactive applications, and highlights my ability to develop complex systems with user-centric features.
          </p>
        </div>
      </section>

      <section id="contact">
        <h2>CONTACT</h2>
        <p>You can reach me at: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
      </section>
    </div>
  );
}

export default App;
