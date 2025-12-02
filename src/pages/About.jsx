import React from 'react';
import './About.css';
import Harleen from '../images/team_2025/harleen.jpg';
import Jeeda from '../images/team_2025/jeeda.jpg';
import Bhavneet from '../images/team_2025/bhavneet.jpg';
import blank from '../images/team_2025/blank.png';
import Dola from '../images/team_2025/dola.jpeg';
import Farida from '../images/team_2025/farida.jpeg';
import Sachi from '../images/team_2025/sachi.jpg';
import Maathumai from '../images/team_2025/maathumai.jpeg';
import Aric from '../images/team_2025/aric.jpg';
import Myesha from '../images/team_2025/myesha.jpeg';
import Megheti from '../images/team_2025/megheti.jpg';
import Wania from '../images/team_2025/wania.jpeg';
import Marica from '../images/team_2025/marica.jpg';
import Trisha from '../images/team_2025/trisha.jpeg';
import Jenna from '../images/team_2025/jenna.jpeg';
import Kiriya from '../images/team_2025/kiriya.jpg';
import Jeffrey from '../images/team_2025/jeffrey.jpg';
import Natasha from '../images/team_2025/natasha.jpeg';
import Hailey from '../images/team_2025/hailey.jpeg';
import Jonathan from '../images/team_2025/jonathan.jpeg';

const teamMembers = [
  // Co-Presidents
  {name:'Harleen Khangura', year:'3B', role:'Co-President', image:Harleen},
  {name:'Jeeda Sabri', year:'3B', role:'Co-President', image:Jeeda},
  {name:'Bhavneet Bola', year:'3B', role:'Co-President', image:Bhavneet},
  // Graphics Directors
  {name:'Deepta Yelamanchi', year:'1A', role:'Graphics Director', image:blank},
  {name:'Dola Anantachina', year:'1A', role:'Graphics Director', image:Dola},
  // Finance
  {name:'Farida Abdelmalek', year:'3B', role:'Finance Director', image:Farida},
  // Website Directors
  {name:'Sachi Bharwada', year:'3B', role:'Website Director', image:Sachi},
  {name:'Maathumai Prabhakaran', year:'3B', role:'Website Director', image:Maathumai},
  // Newsletter
  {name:'Aric Quan', year:'3B', role:'Newsletter Director', image:Aric},
  // Outreach / Comms
  {name:'Myesha Zaman', year:'2B', role:'Communications Director', image:Myesha},
  {name:'Megheti Bekmezian', year:'3B', role:'Outreach Director', image:Megheti},
  {name:'Wania Noor', year:'2A', role:'Outreach Director', image:Wania},
  // Marketing Directors
  {name:'Marica Smith', year:'3B', role:'Marketing Director', image:Marica, imageClass:'zoom-adjust'},
  {name:'Trisha Shankara Subramanian', year:'3A', role:'Marketing Director', image:Trisha},
  {name:'Jenna Smith', year:'1B', role:'Marketing Director', image:Jenna},
  // Events Directors
  {name:'Kiriya Awad', year:'3B', role:'Events Director', image:Kiriya},
  {name:'Jeffrey Wang', year:'1B', role:'Events Director', image:Jeffrey},
  {name:'Natasha Poon', year:'3A', role:'Events Director', image:Natasha},
  {name:'Hailey Yena Kim', year:'4A', role:'Events Director', image:Hailey},
  {name:'Jonathan Wang', year:'2A', role:'Events Director', image:Jonathan, imageClass:'zoom-adjust'},
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
