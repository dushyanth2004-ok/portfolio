import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Dus<span>h.</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">My Services</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <a  className="connect-btn"
          href="https://www.linkedin.com/in/dushyanthsn/"
          target="_blank"
          rel="noopener noreferrer"
      >
      Connect With Me
      </a>

    </nav>
  );
}
export default Navbar;