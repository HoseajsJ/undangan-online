import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import OpeningCover from './components/OpeningCover';
import MusicPlayer from './components/MusicPlayer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import CountdownTimer from './components/CountdownTimer';
import GallerySection from './components/GallerySection';
import LocationSection from './components/LocationSection';
import RSVPSection from './components/RSVPSection';
import ChatSection from './components/ChatSection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef(null);

  // Get guest name from URL parameter
  const getGuestName = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('to') || 'Bapak/Ibu/Saudara/i';
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle opening invitation
  const handleOpenInvitation = () => {
    setIsInvitationOpen(true);
    // Auto play music when invitation is opened
    if (audioRef.current) {
      audioRef.current.play()
        .then(() => setIsMusicPlaying(true))
        .catch(err => console.log('Audio autoplay prevented:', err));
    }
  };

  // Toggle music
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isInvitationOpen) {
      return undefined;
    }

    const rootEl = document.documentElement;
    let ticking = false;

    const updateScrollProps = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;

      rootEl.style.setProperty('--scroll-progress', progress.toString());
      rootEl.style.setProperty('--scroll-y', `${scrollTop}px`);

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollProps);
        ticking = true;
      }
    };

    updateScrollProps();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      rootEl.style.removeProperty('--scroll-progress');
      rootEl.style.removeProperty('--scroll-y');
    };
  }, [isInvitationOpen]);

  return (
    <div className="app">
      {/* Background Music */}
      <audio ref={audioRef} loop>
        <source src="https://cdn.pixabay.com/audio/2022/03/10/audio_4c9e1b3f8c.mp3" type="audio/mpeg" />
      </audio>

      {/* Opening Cover */}
      {!isInvitationOpen && (
        <OpeningCover 
          onOpen={handleOpenInvitation} 
          guestName={getGuestName()}
        />
      )}

      {/* Main Content */}
      {isInvitationOpen && (
        <>
          <MusicPlayer isPlaying={isMusicPlaying} onToggle={toggleMusic} />
          <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <main className="main-content">
            <HeroSection />
            <CoupleSection />
            <CountdownTimer />
            <GallerySection />
            <LocationSection />
            <RSVPSection />
            <ChatSection />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;