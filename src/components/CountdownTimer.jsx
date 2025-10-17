import React from 'react';
import { motion } from 'framer-motion';
import Countdown from 'react-countdown';

const CountdownTimer = () => {
  // Set the wedding date - October 18, 2025
  const weddingDate = new Date(2025, 9, 18, 10, 0, 0); // October is 9 (0-indexed)

  // Renderer for the countdown
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Hari Bahagia Telah Tiba!</span>;
    }

    return (
      <div className="countdown-container">
        <div className="countdown-item">
          <div className="countdown-value">{days}</div>
          <div className="countdown-label">Hari</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{hours}</div>
          <div className="countdown-label">Jam</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{minutes}</div>
          <div className="countdown-label">Menit</div>
        </div>
        <div className="countdown-separator">:</div>
        <div className="countdown-item">
          <div className="countdown-value">{seconds}</div>
          <div className="countdown-label">Detik</div>
        </div>
      </div>
    );
  };

  return (
    <section id="countdown" className="countdown-section">
      <div className="container">
        <motion.div 
          className="countdown-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="section-title">
            <h2>Hitung Mundur Acara</h2>
            <div className="batak-divider"></div>
          </div>
          
          <div className="countdown-content">
            <Countdown date={weddingDate} renderer={renderer} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CountdownTimer;