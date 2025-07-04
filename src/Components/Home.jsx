import React from 'react';
import './Home.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="intro">
        <img src="/profile.png" alt="Dushyanth S N" className="profile-pic" />
        <h1>I'm <span className="highlight">Dushyanth S N</span>, Fullstack Web Developer.</h1>
        <p>I am a Fullstack Web Developer from Karnataka, Hands on experience in MERN Stack.</p>
        <div className="home-buttons">
          <a  className="connect"
              href="https://www.linkedin.com/in/dushyanthsn/"
              target="_blank"
              rel="noopener noreferrer"
          >
          Connect with me
          </a>

          <a  className="resume"
              href="Myresume .pdf"
              download
          >
          My resume
          </a>

        </div>
      </div>
    </section>
  );
}

export default Home;