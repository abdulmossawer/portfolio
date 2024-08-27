// src/components/SkillGrid.js
import React from 'react';
import { motion } from 'framer-motion';
import './SkillGrid.scss'; // Import the SCSS file for styling

const skills = [
  { name: 'React', image: '/react.png', size: 'large' },
  { name: 'JS', image: '/js.png', size: 'medium' },
  { name: 'Python', image: '/python.png', size: 'medium' },
  { name: 'NodeJs', image: '/nodejs.png', size: 'large' },
  { name: 'NextJs', image: '/next.png', size: 'medium' },
  { name: 'MongoDB', image: '/mongodb.png', size: 'medium' },
  { name: 'Html', image: '/html-5.png', size: 'medium' },
  { name: 'Css', image: '/css-3.png', size: 'medium' },
  { name: 'C', image: '/letter-c.png', size: 'medium' },
  { name: 'Java', image: '/java.png', size: 'medium' },
  { name: 'Github', image: '/git.png', size: 'medium' },
  { name: 'Tailwind', image: '/tail.png', size: 'medium' },
];

const SkillGrid = () => {
  return (
    <div className="skill-grid">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className={`skill-item ${skill.size}`}
          initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ 
            scale: 1.1, 
            rotate: 5, 
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.4)',
            backgroundColor: '#1e1a49', 
            transition: { duration: 0.3 }
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.img
            src={skill.image}
            alt={skill.name}
            className="skill-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
          <motion.div
            className="skill-name"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {skill.name}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillGrid;
