import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const skills = {
    'Machine Learning': [
      'Deep Learning',
      'Computer Vision',
      'Natural Language Processing',
      'Reinforcement Learning'
    ],
    'Programming': [
      'Python',
      'JavaScript',
      'TypeScript',
      'C++',
      'SQL'
    ],
    'Tools & Technologies': [
      'TensorFlow',
      'PyTorch',
      'React',
      'Node.js',
      'Git',
      'Docker'
    ],
    'Research': [
      'Academic Writing',
      'Data Analysis',
      'Experimental Design',
      'Literature Review'
    ]
  };

  return (
    <div className="about-container">
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="title">About Me</h1>
        <p className="text">
          I am a passionate machine learning researcher and software developer with a strong focus on computer vision and natural language processing. My journey in technology has been driven by a deep curiosity about how machines can learn and understand the world around us.
        </p>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="subtitle">Skills & Expertise</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList], index) => (
            <motion.div
              key={category}
              className="skill-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <h3 className="skill-title">{category}</h3>
              <ul className="skill-list">
                {skillList.map((skill) => (
                  <li key={skill} className="skill-item">{skill}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        className="section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2 className="subtitle">Education & Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <h3 className="timeline-title">PhD in Computer Science</h3>
            <p className="timeline-subtitle">Stanford University</p>
            <p className="timeline-date">2018 - 2022</p>
            <p className="timeline-description">
              Focused on deep learning and computer vision, with research published in top-tier conferences.
            </p>
          </div>
          <div className="timeline-item">
            <h3 className="timeline-title">Research Scientist</h3>
            <p className="timeline-subtitle">AI Research Lab</p>
            <p className="timeline-date">2022 - Present</p>
            <p className="timeline-description">
              Leading research projects in computer vision and developing state-of-the-art models.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About; 