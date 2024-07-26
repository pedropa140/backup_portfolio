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
          I am a dedicated and passionate Computer Science professional currently serving as the Head ILab Assistant and Computer Science Student Manager at Rutgers University. Since January 2022, I have been leading a team of 12 computer science tutors, assisting over 70 students per week in mastering data structures and algorithms. My role extends to maintaining over 30 PC servers, performing troubleshooting, and conducting routine maintenance to ensure optimal performance.
          <br></br>
          In addition to my technical responsibilities, I take pride in fostering a welcoming and supportive environment for students and professors. I lead computer science tours, helping to introduce prospective students to the vibrant and dynamic community at Rutgers.
          <br></br>
          As a Head Graduate Teaching Assistant, a position I've held since September 2023, I grade and teach Python to more than 40 students in the Master of Business and Science degree program. I act as the primary communicator between teaching assistants and the head professor, and I dedicate over six hours weekly to office hours, providing students with the support they need to solidify their understanding of lecture topics. I also design and implement new assignments that challenge students and ensure alignment with curriculum objectives.
          <br></br>
          I hold a Bachelor of Science in Computer Science with a Minor in Cognitive Science from Rutgers University, with a GPA of 3.3/4.0. I also earned an Associate in Science in Computer Science from Middlesex County College, where I made the Dean’s List with a GPA of 3.5/4.0. Additionally, I participated in the IBM Qiskit Global Summer School in both 2022 and 2023, further honing my skills in quantum computing.
          <br></br>
          My personal projects include Green Habits, a task planner focused on sustainability that won the HackRU Spring Hackathon in 2024, and two Discord bots: a Reminder Bot that helps users keep track of tasks and events, and a Gambling Bot that provides a simulated casino experience.
          <br></br>
          My technical skills encompass a wide range of programming languages, frameworks, and APIs, including Python, Java, C, HTML, CSS, JavaScript, SQL, Flask, Django, and more.
          <br></br>
          My journey in academia and hands-on experience in computer science has equipped me with a unique blend of technical expertise, leadership skills, and a passion for teaching and mentoring. I am committed to inspiring the next generation of computer scientists and continuously striving to create an engaging and enriching learning experience for all students.
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
        <div className="project">
          <h3>BeReal-Bot</h3>
          <p>
            Welcome to BeReal-Bot! 👋 This bot is designed to capture authentic moments, just like the BeReal app. Every day, at a random time, you’ll be prompted to share a photo that showcases your true self—no filters, no edits! 📸✨
          </p>
          <p>
            How It Works:
            <ul>
              <li>
                <strong>Random Moment:</strong> You’ll receive a notification at a surprise time.
              </li>
              <li>
                <strong>Snap a Pic:</strong> You’ll have 2 minutes to take a photo of what you’re doing right at that moment. It’s all about being real!
              </li>
              <li>
                <strong>Share & Connect:</strong> After you snap your pic, you can share it with friends and see their moments too. Let’s keep it genuine!
              </li>
            </ul>
          </p>
          <p>
            Remember, it’s not about the likes; it’s about capturing life as it is. So get ready to embrace the spontaneity! 🎉
          </p>
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
