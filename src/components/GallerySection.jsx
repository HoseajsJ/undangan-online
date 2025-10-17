import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'Momen Lamaran',
      description: 'Potret kebersamaan keluarga saat lamaran.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 2,
      title: 'Prewedding Outdoor',
      description: 'Mengabadikan kisah cinta di alam terbuka.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1520854221050-0f4caff449fb?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 3,
      title: 'Kebersamaan Sahabat',
      description: 'Tawa bahagia bersama sahabat terdekat.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1520854221050-0a4472af6499?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 4,
      title: 'Video Prewedding',
      description: 'Cuplikan perjalanan cinta kami.',
      type: 'video',
      thumbnail: 'https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?auto=format&fit=crop&w=1200&q=80',
      videoSrc: 'https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4',
    },
    {
      id: 5,
      title: 'Acara Adat',
      description: 'Prosesi adat penuh makna.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    },
    {
      id: 6,
      title: 'Family Time',
      description: 'Momen hangat keluarga inti.',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1608178398319-48f814d0750c?auto=format&fit=crop&w=1200&q=80',
    },
  ];

  const openMedia = (media) => {
    setSelectedMedia(media);
  };

  const closeMedia = () => {
    setSelectedMedia(null);
  };

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
              whileHover={{ y: -10, scale: 1.03 }}
              onClick={() => openMedia(item)}
            >
              <div className="gallery-media">
                {item.type === 'video' ? (
                  <>
                    <img src={item.thumbnail} alt={item.title} />
                    <div className="play-icon" aria-label="Putar video">▶</div>
                  </>
                ) : (
                  <img src={item.src} alt={item.title} />
                )}
              </div>
              <div className="gallery-info">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Modal for displaying selected media */}
      {selectedMedia && (
        <div className="modal" onClick={closeMedia}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeMedia} aria-label="Tutup galeri">×</button>
            <div className="modal-visual">
              {selectedMedia.type === 'video' ? (
                <video controls poster={selectedMedia.thumbnail}>
                  <source src={selectedMedia.videoSrc} type="video/mp4" />
                  Browser Anda tidak mendukung pemutaran video.
                </video>
              ) : (
                <img src={selectedMedia.src} alt={selectedMedia.title} />
              )}
            </div>
            <div className="modal-info">
              <h3>{selectedMedia.title}</h3>
              <p>{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;