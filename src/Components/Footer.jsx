import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="logo">Dus<span>h.</span></div>
        <p>I am a Fullstack Web Developer from Karnataka, Hands on experience in MERN Stack.</p>
        <p>© 2025 Dushyanth S N. All rights reserved.</p>
      </div>
      <div className="footer-right">
        <h3>Education</h3>
        <p>Engineering : Vidyavardhaka College of Engineering Mysore</p>
        <p>CGPA : 7.17</p>
        <p>Diploma : Government Polytechnic Channapatna</p>
        <p>CGPA : 7.9</p>
        <div className="footer-links">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
