import React from 'react';
import { motion } from 'framer-motion';

const LocationSection = () => {
  return (
    <section id="location" className="location-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Lokasi Acara</h2>
          <div className="batak-divider"></div>
        </motion.div>
        
        <motion.div 
          className="location-content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="location-details"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3>Acara Resepsi Pernikahan</h3>
            <p>Jalan Pernikahan Bahagia No. 123</p>
            <p>Medan, Sumatera Utara</p>
            
            <div className="event-time">
              <p><strong>Waktu:</strong> Pukul 10:00 WIB - Selesai</p>
              <p><strong>Tanggal:</strong> Rabu, 12 November 2025</p>
            </div>
            
            <motion.div 
              className="map-placeholder"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.734284543437!2d98.67176331478174!3d3.556839997460405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131a5a632f379%3A0x6f4e9f3ee15f12e!2sMedan%2C%20Kota%20Medan%2C%20Sumatera%20Utara!5e0!3m2!1sen!2sid!4v1612345678901!5m2!1sen!2sid" 
                width="100%" 
                height="300" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy"
                title="Lokasi Acara Pernikahan"
              ></iframe>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationSection;