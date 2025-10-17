import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ isMenuOpen, toggleMenu }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>Undangan Pernikahan</h1>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul>
            <li><a href="#home">Beranda</a></li>
            <li><a href="#couple">Pasangan</a></li>
            <li><a href="#countdown">Hitung Mundur</a></li>
            <li><a href="#gallery">Galeri</a></li>
            <li><a href="#location">Lokasi</a></li>
            <li><a href="#rsvp">RSVP</a></li>
            <li><a href="#chat">Chat</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="nav mobile-nav">
          <ul>
            <li><a href="#home" onClick={toggleMenu}>Beranda</a></li>
            <li><a href="#couple" onClick={toggleMenu}>Pasangan</a></li>
            <li><a href="#countdown" onClick={toggleMenu}>Hitung Mundur</a></li>
            <li><a href="#gallery" onClick={toggleMenu}>Galeri</a></li>
            <li><a href="#location" onClick={toggleMenu}>Lokasi</a></li>
            <li><a href="#rsvp" onClick={toggleMenu}>RSVP</a></li>
            <li><a href="#chat" onClick={toggleMenu}>Chat</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;