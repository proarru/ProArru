import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with payment integration and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1460925895917-adf4e565db18?w=500&h=300&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and notifications.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['React', 'Firebase', 'Tailwind'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'AI-powered chat application with natural language processing capabilities.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8e0d9?w=500&h=300&fit=crop',
      tags: ['Python', 'TensorFlow', 'Flask', 'React'],
      category: 'backend',
      link: '#',
      github: '#',
    },
    {
      id: 4,
      title: 'Design System',
      description: 'Comprehensive design system and component library for scalable UIs.',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop',
      tags: ['React', 'Storybook', 'SCSS'],
      category: 'frontend',
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'Analytics dashboard for tracking social media metrics and engagement.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
      tags: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
      category: 'fullstack',
      link: '#',
      github: '#',
    },
    {
      id: 6,
      title: 'Mobile App',
      description: 'Cross-platform mobile application for fitness tracking and workout management.',
      image: 'https://images.unsplash.com/photo-1512941691920-25bda36dc643?w=500&h=300&fit=crop',
      tags: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      link: '#',
      github: '#',
    },
  ];

  const filters = ['all', 'frontend', 'backend', 'fullstack', 'mobile'];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

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
    <section id="projects" className="projects">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>Featured Projects</h2>
          <div className="divider"></div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="filter-buttons"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filters.map(filter => (
            <motion.button
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map(project => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <motion.a
                    href={project.link}
                    className="overlay-btn"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.github}
                    className="overlay-btn"
                    whileHover={{ scale: 1.1 }}
                  >
                    <FiGithub size={20} />
                  </motion.a>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
