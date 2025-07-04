import React from 'react';
import './AboutUs.css';

function AboutUs() {
  return (
    <section className="about" id="about">
      <h2>About me</h2>
      <p>I am Fullstack Web Developer with hands on experienced in this field.
      I have a certification on this course .</p>

      <div className="skills">
        <div><span>HTML & CSS</span><div className="bar html"></div></div>
        <div><span>React JS</span><div className="bar react"></div></div>
        <div><span>JavaScript</span><div className="bar js"></div></div>
        <div><span>Node JS</span><div className="bar next"></div></div>
      </div>

      {/* <div className="stats">
        <div><strong>10+</strong><p>Years of Experience</p></div>
        <div><strong>90+</strong><p>Projects Completed</p></div>
        <div><strong>15+</strong><p>Happy Clients</p></div>
      </div> */}
    </section>
  );
}

export default AboutUs;