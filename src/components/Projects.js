import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: "AI Mental Wellness Platform",
            description: "Developing mental wellness platform using AI-powered video chat",
            tech: ["Python", "ElevenLabs", "Hugging Face"]
        },
        {
            title: "Movie Recommendation System",
            description: "Built TF-IDF recommendation system with collaborative filtering",
            tech: ["Python", "Scikit-learn", "Pandas"]
        },
        {
            title: "Task Management Application",
            description: "Terminal-based application with priority queues and hash tables",
            tech: ["C++", "Data Structures"]
        }
    ];

    return (
        <section id="projects" className="section">
            <div className="container">
                <h2>Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="tech-stack">
                                {project.tech.map((tech, techIndex) => (
                                    <span key={techIndex}>{tech}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects; 