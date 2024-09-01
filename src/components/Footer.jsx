// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="social-links">
                <a href="https://www.linkedin.com/in/bojan-zhevairovski" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/linkedin_icon.png`} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://github.com/ZhevairovskiBojan" target="_blank" rel="noopener noreferrer">
                    <img src={`${process.env.PUBLIC_URL}/GitHub_icon.png`} alt="GitHub" className="social-icon" />
                </a>
            </div>
            <p>&copy; 2024 Bojan Zhevairovski. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
    