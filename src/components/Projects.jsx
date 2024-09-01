// src/components/Projects.js
import React from 'react';
import './Projects.css';
import projectsData from '../Data/ProjectsData';

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-link">View on GitHub</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
