import React, { useState } from 'react';
import { motion } from 'framer-motion';

const RSVPSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: '',
    guests: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log('RSVP submitted:', formData);
    alert('Terima kasih atas konfirmasi kehadiran Anda!');
    setFormData({
      name: '',
      email: '',
      attendance: '',
      guests: '',
      message: ''
    });
  };

  return (
    <section id="rsvp" className="rsvp-section">
      <div className="container">
        <div className="section-title">
          <h2>Konfirmasi Kehadiran</h2>
          <div className="batak-divider"></div>
        </div>
        
        <motion.div 
          className="rsvp-form-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <form onSubmit={handleSubmit} className="rsvp-form">
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="attendance">Konfirmasi Kehadiran</label>
              <select
                id="attendance"
                name="attendance"
                value={formData.attendance}
                onChange={handleChange}
                required
              >
                <option value="">Pilih Kehadiran</option>
                <option value="hadir">Hadir</option>
                <option value="tidak_hadir">Tidak Hadir</option>
                <option value="belum_memastikan">Belum Memastikan</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="guests">Jumlah Tamu</label>
              <input
                type="number"
                id="guests"
                name="guests"
                min="1"
                value={formData.guests}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Pesan Ucapan</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Ucapkan selamat kepada pengantin..."
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              Kirim Konfirmasi
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVPSection;