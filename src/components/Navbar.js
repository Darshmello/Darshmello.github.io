import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = ({ isDarkMode, toggleTheme }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">Darsh Gangakhedkar</div>
            <div className="nav-links">
                <a href="#home" className="active">Home</a>
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#photography">Photography</a>
                <a href="#contact">Contact</a>
            </div>
            <button id="theme-toggle" className="theme-toggle" onClick={toggleTheme}>
                {isDarkMode ? <FaMoon /> : <FaSun />}
            </button>
        </nav>
    );
};

export default Navbar; 