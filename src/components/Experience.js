import React from 'react';
import './Experience.css';

const experiences = [
    {
        title: 'Head ILab Assistant / Computer Science Student Manager',
        institution: 'Rutgers University',
        location: 'New Brunswick, New Jersey',
        date: 'January 2022 – May 2024',
        description: [
            'Led and worked with a team of 12 computer science tutors, assisting 70+ students in data structures and algorithms per week.',
            'Maintained 30+ Linux servers from the Department of Computer Science, performing troubleshooting and routine maintenance on the machines.',
            'Led computer science tours alongside the computer science department, welcoming prospective students.',
            'Created a clean and welcoming space for students and professors.'
        ],
    },
    {
        title: 'Head Graduate Teaching Assistant',
        institution: 'Rutgers University',
        location: 'New Brunswick, New Jersey',
        date: 'September 2023 – May 2024',
        description: [
            'Graded and taught Python to 40+ students for the Master of Business and Science degree.',
            'Acted as the main communicator between teaching assistants and the head professor.',
            'Held office hours weekly for a total of 6+ hours to help students solidify their understanding of lecture topics.',
            'Designed and implemented new assignments for the course, ensuring they aligned with curriculum objectives.'
        ],
    },
    {
        title: 'Graduate Teaching Assistant',
        institution: 'Rutgers University',
        location: 'New Brunswick, New Jersey',
        date: 'September 2022 – September 2023',
        description: [
            'Graded and taught Python to 40+ students for the Master of Business and Science degree.',
            'Held office hours weekly for a total of 6+ hours to help students solidify their understanding of lecture topics.',
            'Designed and implemented new assignments for the course, ensuring they aligned with curriculum objectives.'
        ],
    },
    {
        title: 'ILab Assistant / Computer Science Tutor',
        institution: 'Rutgers University',
        location: 'New Brunswick, New Jersey',
        date: 'January 2022 – May 2023',
        description: [
            'Worked with a team of 12 computer science tutors, assisting 70+ students in data structures and algorithms per week.',
            'Maintained 30+ Linux servers from the Department of Computer Science.'
        ],
    }
];

const Experience = () => {
    return (
        <section id="experience" >
            <h2>Experience</h2>
            <div className='experience-timeline'>    {experiences.map((exp, index) => (
                    <div key={index} className={`experience-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="experience-timeline-content">
                            <h3>{exp.title}</h3>
                            <h4>{exp.institution} - {exp.location}</h4>
                            <p>{exp.date}</p>
                            {exp.description.length > 0 && (
                                <ul>
                                    {exp.description.map((desc, i) => (
                                        <li key={i}>{desc}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
                </div>
        </section>
    );
};

export default Experience;
