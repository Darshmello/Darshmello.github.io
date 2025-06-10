import React from 'react';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container">
                <h2>About Me</h2>
                <div className="about-content">
                    <div className="education">
                        <h3>Education</h3>
                        <p>University of California, Merced</p>
                        <p>Bachelor of Science in Computer Science and Engineering</p>
                        <p>Expected May 2026</p>
                    </div>
                    <div className="skills">
                        <h3>Technical Skills</h3>
                        <ul>
                            <li>Programming Languages: Python, C++, Java, JavaScript, HTML, CSS</li>
                            <li>Frameworks/Libraries: NumPy, TensorFlow, Pandas, Scikit-learn, Matplotlib, OpenGL, Seaborn</li>
                            <li>Tools: AWS, Docker, Linux, Git, Jupyter Notebook, Visual Studio Code, PyCharm</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 