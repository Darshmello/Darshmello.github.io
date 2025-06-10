import React from 'react';
import { FaPhone, FaEnvelope, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <h2>Contact</h2>
                <div className="contact-info">
                    <p><FaPhone /> 408-912-6510</p>
                    <p><FaEnvelope /> darshr2d2@gmail.com</p>
                    <p>
                        <FaLinkedin />
                        <a href="https://linkedin.com/in/darsh-gangakhedkar-ai" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </p>
                    <p><FaMapMarkerAlt /> San Jose, CA</p>
                </div>
            </div>
        </section>
    );
};

export default Contact; 