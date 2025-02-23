import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="about-title">About Us</h1>
      <p className="about-intro">
        We connect students, faculty, researchers, and industry experts in Biomedical Engineering,
        to educate and unite <span className="highlighted-word-intro">passionate</span> minds.
      </p>

      {/* Our Mission */}
      <h2 className="section-heading1">Our Mission</h2>
      <div className="layered-card">
        <p>
          The University of Waterloo Biomedical Engineering Society is an organization for students
          to connect with faculty, researchers, and industry members in biomedical engineering.
          Through this club, our goal is to educate more students about biomedical engineering and
          career possibilities, foster interest in this discipline, provide informational resources,
          and connect like-minded students with a passion for BME.
        </p>
      </div>

      {/* Our Vision */}
      <h2 className="section-heading2">Our Vision</h2>
      <div className="layered-card">
        <p>
          <div className='highlighted-word-values'>Innovation and Creativity:</div> We embrace curiosity and encourage
          out-of-the-box thinking to drive advancements in biomedical engineering.
        </p>
        <p>
          <div className='highlighted-word-values'>Collaboration and Inclusivity:</div> We foster a welcoming environment where
          students from all backgrounds and skill levels can learn, contribute, and grow together.
        </p>
        <p>
          <div className='highlighted-word-values'>Learning and Growth:</div> We are committed to continuous learning, skill
          development, and hands-on experience to prepare students for future careers in BME.
        </p>
      </div>
      <h1 className="team-title">Meet the Team</h1>
        <div className="team-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, neque? 
            Corrupti odit labore officiis aliquid itaque, atque corporis rem perspiciatis at error, 
            eos ad minus ipsam placeat hic quibusdam voluptas.</p>
        </div>
    </div>
  );
}

export default About;
