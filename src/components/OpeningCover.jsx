import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaEnvelopeOpen, FaMusic } from 'react-icons/fa';

const OpeningCover = ({ onOpen, guestName }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="opening-cover"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.1 }}
        transition={{ duration: 1 }}
      >
        <div className="opening-overlay"></div>
        <div className="opening-content">
          <motion.div
            className="opening-ornament-top"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="ornament-line"></div>
          </motion.div>

          <motion.div
            className="opening-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <p className="opening-label">Undangan Pernikahan</p>
            <h1 className="opening-names">Nama Mempelai</h1>
            <div className="opening-divider"></div>
          </motion.div>

          <motion.div
            className="opening-guest"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <p className="guest-label">Kepada Yth.</p>
            <p className="guest-name">{guestName || 'Bapak/Ibu/Saudara/i'}</p>
            <p className="guest-note">Di Tempat</p>
          </motion.div>

          <motion.button
            className="open-invitation-btn"
            onClick={handleOpen}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelopeOpen className="btn-icon" />
            <span>Buka Undangan</span>
          </motion.button>

          <motion.p
            className="music-note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <FaMusic /> Musik akan diputar otomatis
          </motion.p>

          <motion.div
            className="opening-ornament-bottom"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="ornament-line"></div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default OpeningCover;
