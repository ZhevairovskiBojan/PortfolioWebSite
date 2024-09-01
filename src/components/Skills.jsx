// src/components/Skills.js
import React from 'react';
import './Skills.css';

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>
            <div className="skills-content">
                <div className="skill">
                    <h3>HTML5 & CSS3</h3>
                    <p>Building responsive and accessible web pages.</p>
                </div>
                <div className="skill">
                    <h3>JavaScript</h3>
                    <p>Fundamentals in JavaScript, React.js, and Node.js.</p>
                </div>
                <div className="skill">
                    <h3>Version Control</h3>
                    <p>Git and GitHub for collaborative development.</p>
                </div>
                <div className="skill">
                    <h3>Management</h3>
                    <p>Skills in managing projects from conception to deployment.</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
