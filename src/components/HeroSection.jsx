import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section id="home" className="hero-section">
      <div className="hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="batak-ornament-top">
            <div className="batak-pattern"></div>
          </div>
          
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Undangan Pernikahan
          </motion.h1>
          
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Menuju Hari Bahagia Kami
          </motion.p>
          
          <motion.div 
            className="couple-names"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <h2>Merry & Iyansen</h2>
            <div className="batak-divider"></div>
            <p className="date">Sabtu, 18 Oktober 2025</p>
          </motion.div>
          
          <div className="batak-ornament-bottom">
            <div className="batak-pattern"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;