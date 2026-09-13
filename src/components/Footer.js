import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, href: '#', label: 'GitHub' },
    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FiTwitter, href: '#', label: 'Twitter' },
    { icon: FiMail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="footer-section">
            <h3>ProArru</h3>
            <p>Full Stack Developer | Creative Technologist</p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Follow Me</h4>
            <div className="social-links">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    title={social.label}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>&copy; {currentYear} ProArru. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
