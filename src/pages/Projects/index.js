import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All Projects');

  const filters = [
    'All Projects',
    'Computer Vision',
    'Natural Language Processing',
    'Reinforcement Learning'
  ];

  const projects = [
    {
      title: 'Object Detection System',
      description: 'A real-time object detection system using YOLOv5 and TensorFlow, capable of identifying multiple objects in video streams.',
      image: '/images/projects/object-detection.jpg',
      category: 'Computer Vision',
      techStack: ['Python', 'TensorFlow', 'OpenCV', 'YOLOv5'],
      github: 'https://github.com/username/object-detection',
      demo: 'https://demo.object-detection.com'
    },
    {
      title: 'Text Summarization Model',
      description: 'An advanced NLP model that generates concise summaries of long articles while maintaining key information and context.',
      image: '/images/projects/text-summarization.jpg',
      category: 'Natural Language Processing',
      techStack: ['Python', 'PyTorch', 'Transformers', 'NLTK'],
      github: 'https://github.com/username/text-summarization',
      demo: 'https://demo.text-summarization.com'
    },
    {
      title: 'Autonomous Navigation',
      description: 'A reinforcement learning-based system for autonomous navigation in complex environments using deep Q-learning.',
      image: '/images/projects/autonomous-nav.jpg',
      category: 'Reinforcement Learning',
      techStack: ['Python', 'PyTorch', 'Gym', 'OpenAI'],
      github: 'https://github.com/username/autonomous-nav',
      demo: 'https://demo.autonomous-nav.com'
    }
  ];

  const filteredProjects = activeFilter === 'All Projects'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="projects-container">
      <motion.h1
        className="title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h1>

      <motion.div
        className="filter-container"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-button ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </motion.div>

      <motion.div
        className="projects-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.github}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Projects; 