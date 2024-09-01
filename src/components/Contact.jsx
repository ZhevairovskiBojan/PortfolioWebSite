// src/components/Contact.js
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <h2>Contact</h2>
            <p>If you would like to get in touch, please reach out via <a href="mailto:bojanzevairovski@gmail.com">email</a>.</p>
            <p>You can also download my <a href={`${process.env.PUBLIC_URL}/CV.pdf`} download="YourName_CV.pdf" className="download-link">CV here</a></p>
        </section>  
    );
};

export default Contact;
