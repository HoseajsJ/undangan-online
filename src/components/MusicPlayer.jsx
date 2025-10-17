import React, { useState, useRef, useEffect } from 'react';
import { FaMusic, FaPause, FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';

const MusicPlayer = ({ isPlaying, onToggle }) => {
  return (
    <motion.div
      className="music-player"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
    >
      <button
        className="music-toggle"
        onClick={onToggle}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        <motion.div
          animate={{ rotate: isPlaying ? 360 : 0 }}
          transition={{ duration: 3, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
        >
          <FaMusic />
        </motion.div>
        <div className="music-control">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </div>
      </button>
    </motion.div>
  );
};

export default MusicPlayer;
