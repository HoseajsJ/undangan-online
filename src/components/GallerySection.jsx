import React from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Momen Spesial',
      description: 'Kenangan indah perjalanan cinta kami.',
      type: 'image',
      src: '/IMG_8931.JPG',
    },
    {
      id: 2,
      title: 'Momen Kebersamaan',
      description: 'Hari yang penuh tawa dan canda bersama keluarga.',
      type: 'image',
      src: '/IMG_8934.JPG',
    },
    {
      id: 3,
      title: 'Kenangan Manis',
      description: 'Detik-detik bahagia bersama sahabat.',
      type: 'image',
      src: '/IMG_8957.JPG',
    },
    {
      id: 4,
      title: 'Momen Terindah',
      description: 'Hari yang tak akan terlupakan sepanjang hidup.',
      type: 'image',
      src: '/IMG_9012.JPG',
    },
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <motion.div 
          className="section-title"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Galeri Kenangan</h2>
          <div className="batak-divider"></div>
        </motion.div>
        
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="gallery-item"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="gallery-media">
                <img src={item.src} alt={item.title} />
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;