import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          className="section-header"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.div variants={itemVariants} className="divider"></motion.div>
        </motion.div>

        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="about-text">
            <p>
              I'm a passionate full-stack developer with a keen eye for design and user experience.
              With 3+ years of experience, I've worked on various projects ranging from small startups
              to large-scale applications.
            </p>
            <p>
              My expertise lies in creating scalable, efficient, and beautiful web applications.
              I'm constantly learning new technologies and best practices to stay ahead in this
              ever-evolving field.
            </p>
            <p>
              When I'm not coding, you can find me exploring new design trends, contributing to
              open-source projects, or sharing knowledge with the community.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="about-stats">
            <div className="stat">
              <h3>3+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>20+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>15+</h3>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
