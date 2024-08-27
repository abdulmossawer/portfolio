import React from 'react';
import { motion } from 'framer-motion';
import './AboutUs.scss'; // Import the SCSS file for styling

const AboutUs = () => {
  const educationDetails = [
    { degree: 'Bachelor of Computer Applications', institution: 'Raniganj Institute Of Information Technology', cgpa: '8 CGPA' },
    { degree: 'High School', institution: 'Raniganj Marwari Sanatan Vidyalaya', cgpa: '5.7 CGPA' },
  ];

  return (
    <div className="about-us" id='About'>
      <motion.div
        className="header"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1>About Us</h1>
        <p>We are a dedicated team of professionals with a passion for technology and innovation.</p>
      </motion.div>

      <motion.div
        className="profile-section"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img src="/profile-pic.png" alt="Profile" className="profile-image" />
        <div className="profile-info">
          <h2>Abdul Mossawer</h2>
          <p>Full Stack Developer | BCA Student</p>
        </div>
      </motion.div>

      <motion.div
        className="education-section"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2>Education</h2>
        <ul>
          {educationDetails.map((edu, index) => (
            <li key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution}</p>
              <p className="grade">{edu.cgpa}</p>
            </li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default AboutUs;