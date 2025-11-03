import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const CoupleSection = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, amount: 0.3 });
  const isInView2 = useInView(ref2, { once: true, amount: 0.3 });
  
  const cardControls1 = useAnimation();
  const cardControls2 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      cardControls1.start("visible");
    }
    if (isInView2) {
      cardControls2.start("visible");
    }
  }, [isInView1, isInView2, cardControls1, cardControls2]);

  const cardVariant = {
    hidden: { opacity: 0, y: 50, rotateY: 90 },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateY: 0,
      transition: { 
        duration: 0.8, 
        type: "spring",
        stiffness: 100
      } 
    }
  };

  return (
    <section id="couple" className="couple-section">
      <div className="container">
        <div className="section-title">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Mempelai
          </motion.h2>
          <div className="batak-divider"></div>
        </div>
        
        <div className="couple-cards">
          <motion.div 
            ref={ref1}
            className="couple-card"
            animate={cardControls1}
            initial="hidden"
            variants={cardVariant}
            whileHover={{ y: -10, rotateY: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src="/IMG_8934.JPG" alt="Iyansen Rohni Saragih" />
                <h3>Iyansen Rohni Saragih</h3>
                <p>Putra dari Bapak ... & Ibu ...</p>
              </div>
              <div className="card-back">
                <p>Putra dari</p>
                <p>Bapak ... & Ibu ...</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="symbol"
          >
            <div className="ring-icon">⚭</div>
          </motion.div>
          
          <motion.div 
            ref={ref2}
            className="couple-card"
            animate={cardControls2}
            initial="hidden"
            variants={cardVariant}
            whileHover={{ y: -10, rotateY: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card-inner">
              <div className="card-front">
                <img src="/IMG_8934.JPG" alt="Merry Helmina Hutabarat" />
                <h3>Merry Helmina Hutabarat</h3>
                <p>Putri dari Bapak ... & Ibu ...</p>
              </div>
              <div className="card-back">
                <p>Putri dari</p>
                <p>Bapak ... & Ibu ...</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;