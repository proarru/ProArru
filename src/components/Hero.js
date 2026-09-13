import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDown } from 'react-icons/fi';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title">
          Hi, I'm <span className="gradient-text">ProArru</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          Full Stack Developer | Creative Technologist | Problem Solver
        </motion.p>

        <motion.p variants={itemVariants} className="hero-description">
          I build beautiful, responsive web applications with modern technologies
          and create exceptional user experiences.
        </motion.p>

        <motion.div variants={itemVariants} className="hero-buttons">
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(59, 130, 246, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
          </motion.button>
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.button>
        </motion.div>

        <motion.div variants={itemVariants} className="social-links">
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 5 }}>
            <FiGithub size={24} />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 5 }}>
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a href="#" whileHover={{ scale: 1.2, rotate: 5 }}>
            <FiMail size={24} />
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <FiArrowDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
