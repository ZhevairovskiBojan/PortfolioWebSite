// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-content">
                <img 
                    src={`${process.env.PUBLIC_URL}/profile.jpg`} 
                    alt="Your Name" 
                    className="about-image"
                />
                <p>
                    I am a web developer with a passion for creating efficient and scalable web applications. 
                    With a background in customs clearance and a certificate in Full Stack JavaScript development, 
                    I have a unique blend of technical skills and real-world experience.
                </p>
            </div>
        </section>
    );
};

export default About;

