import React from 'react';
import './About.css';
import Aric from '../images/team/aric.jpg';
import Bhavneet from '../images/team/bhavneet.jpg';
import blank from '../images/team/blank.png';
import Chantelle from '../images/team/chantelle.jpg';
import Chelsea from '../images/team/chelsea.jpeg';
import Farida from '../images/team/farida.jpeg';
import Harleen from '../images/team/harleen.jpg';
import Jenna from '../images/team/jenna.jpeg';
import Jeeda from '../images/team/jeeda.jpg';
import Joanna from '../images/team/joanna.jpeg';
import Jonathan from '../images/team/jonathan.jpeg';
import Maathumai from '../images/team/maathumai.jpeg';
import Marica from '../images/team/marica.jpg';
import Megheti from '../images/team/megheti.jpg';
import Myesha from '../images/team/myesha.jpeg';
import Sachi from '../images/team/sachi.jpg';
import Sargun from '../images/team/sargun.jpg';
import Trisha from '../images/team/trisha.jpeg';
import Wania from '../images/team/wania.jpeg';


const teamMembers = [
  { name: 'Harleen Khangura', year: '3A', role: 'Co-President', image: Harleen },
  { name: 'Jeeda Sabri', year: '3A', role: 'Co-President', image: Jeeda },
  { name: 'Bhavneet Bola', year: '3A', role: 'Co-President', image: Bhavneet },
  { name: 'Aethar Marhon', year: '3A', role: 'Design Director', image: blank },
  { name: 'Joanna Peng', year: '1B', role: 'Design Director', image: Joanna },
  { name: 'Farida Abdelmalek', year: '3A', role: 'Finance Director', image: Farida },
  { name: 'Sachi Bharwada', year: '3A', role: 'Website Director', image: Sachi },
  { name: 'Maathumai Prabhakaran', year: '3A', role: 'Website Director', image: Maathumai },
  { name: 'Aric Quan', year: '3A', role: 'Newsletter Director', image: Aric },
  { name: 'Chantelle Ng', year: '4B', role: 'Outreach Director', image: Chantelle },
  { name: 'Megheti Bekmezian', year: '3A', role: 'Outreach Director', image: Megheti },
  { name: 'Myesha Zaman', year: '2B', role: 'Communications Director', image: Myesha },
  { name: 'Hailey Yena Kim', year: '3B', role: 'Events Director', image: blank },
  { name: 'Jonathan Wang', year: '1B', role: 'Events Director', image: Jonathan, imageClass: 'zoom-adjust' },
  { name: 'Sargun Sidhu', year: '1B', role: 'Events Director', image: Sargun },
  { name: 'Wania Noor', year: '1B', role: 'First-Year Representative', image: Wania },
  { name: 'Chelsea Kwon', year: '1B', role: 'First-Year Representative', image: Chelsea },
  { name: 'Marica Smith', year: '3A', role: 'Marketing Director', image: Marica, imageClass: 'zoom-adjust' },
  { name: 'Trisha Shankara Subramanian', year: '2B', role: 'Marketing Director', image: Trisha },
  { name: 'Jenna Smith', year: '1B', role: 'Marketing Director', image: Jenna },
];

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
          <p>Meet the team that makes it all happen! Passionate, hard-working, and dedicated, 
            our members are committed to fostering a <span className="highlighted-word">vibrant </span> 
            biomedical engineering community. Get to know the faces behind the UW BME Society!</p>
        </div>
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="photo-frame">
              <img
                src={member.image}
                alt={member.name}
                className={`team-photo ${member.imageClass || ''}`}
              />
            </div>
            <p className="team-name">{member.name} | {member.year}</p>
            <p className="team-role">{member.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
