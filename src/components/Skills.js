import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'JavaScript', 'HTML/CSS'],
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs'],
    },
    {
      name: 'Tools & Platforms',
      skills: ['Git', 'Docker', 'AWS', 'Firebase', 'GitHub', 'Figma'],
    },
    {
      name: 'Other',
      skills: ['UI/UX Design', 'Agile', 'Problem Solving', 'Team Leadership', 'Communication'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Skills & Expertise</h2>
          <div className="divider"></div>
        </motion.div>

        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category, index) => (
            <motion.div key={index} className="skill-category" variants={itemVariants}>
              <h3>{category.name}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    className="skill-item"
                    whileHover={{ scale: 1.05, x: 5 }}
                  >
                    <span className="skill-dot"></span>
                    <span>{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
