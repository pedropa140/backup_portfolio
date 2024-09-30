import React from 'react';
import './Education.css';

const experiences = [
    {
        title: 'Bachelor of Science in Computer Science, Minor in Cognitive Science',
        institution: 'Rutgers, The State University of New Jersey',
        location: 'New Brunswick, New Jersey',
        date: 'September 2021 – May 2024',
        description: []
    },
    {
        title: 'Associate in Science: Computer Science',
        institution: 'Middlesex County College',
        location: 'New Brunswick, New Jersey',
        date: 'September 2019 – May 2021',
        description: [
            'Achieved Dean’s List 3x for academic excellence.'
        ],
    },
];

const Experience = () => {
    return (
        <section id="education" >
            <h2>Education</h2>
            <div className='education-timeline'>    {experiences.map((exp, index) => (
                    <div key={index} className={`education-timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                        <div className="education-timeline-content">
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
