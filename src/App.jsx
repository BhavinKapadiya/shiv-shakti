import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NavigationMenu from './components/NavigationMenu';
import HeroSection from './components/HeroSection';
import ManifestoSection from './components/ManifestoSection';
import WorksSection from './components/WorksSection';
import ProductionsFilterSection from './components/ProductionsFilterSection';
import OurStory from './components/OurStory';
import ArtistsSection from './components/ArtistsSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import ArchiveSection from './components/ArchiveSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';

// Modals
import BookingModal from './components/Modals/BookingModal';
import InviteModal from './components/Modals/InviteModal';
import VideoModal from './components/Modals/VideoModal';
import ArtistModal from './components/Modals/ArtistModal';
import GalleryModal from './components/Modals/GalleryModal';
import ShowInfoModal from './components/Modals/ShowInfoModal';
import AboutModal from './components/Modals/AboutModal';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cursorText, setCursorText] = useState('');
  
  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isInviteOpen, setIsInviteOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isShowInfoOpen, setIsShowInfoOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [selectedArtist, setSelectedArtist] = useState(null);
  const [selectedMoment, setSelectedMoment] = useState(null);

  const scrollToSection = (targetId) => {
    setIsMenuOpen(false);
    if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] relative overflow-x-hidden selection:bg-[#e60064] selection:text-white">
      
      {/* 1. Global Navbar matching Boch & Fernsh Screenshot Header */}
      <Navbar
        onOpenMenu={() => setIsMenuOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        onNavigate={scrollToSection}
        setCursorText={setCursorText}
      />

      {/* Fullscreen Navigation Drawer */}
      <NavigationMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onNavigate={scrollToSection}
        onOpenBooking={() => setIsBookingOpen(true)}
        onOpenInvite={() => setIsInviteOpen(true)}
        setCursorText={setCursorText}
      />

      {/* Main Page Flow */}
      <main>
        {/* 2. Hero Section (Matches Screenshot 1) */}
        <HeroSection
          onOpenVideo={() => setIsVideoOpen(true)}
          onOpenBooking={() => setIsBookingOpen(true)}
          onNavigate={scrollToSection}
          setCursorText={setCursorText}
        />

        {/* 3. Manifesto & Awards with Emoji Stickers (Matches Screenshot 2) */}
        <ManifestoSection
          setCursorText={setCursorText}
        />

        {/* 4. "We make work that works" 2-Column Productions (Matches Screenshot 3) */}
        <WorksSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenInvite={() => setIsInviteOpen(true)}
          onOpenShowInfo={() => setIsShowInfoOpen(true)}
          onOpenVideo={() => setIsVideoOpen(true)}
          setCursorText={setCursorText}
        />

        {/* 5. Dark Repertoire & Filter View (Matches Screenshot 5) */}
        <ProductionsFilterSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenShowInfo={() => setIsShowInfoOpen(true)}
          setCursorText={setCursorText}
        />

        {/* 6. Our Story & 3 Pillars */}
        <OurStory
          onOpenAboutModal={() => setIsAboutOpen(true)}
          onOpenInvite={() => setIsInviteOpen(true)}
          setCursorText={setCursorText}
        />

        {/* 7. The Company / Artists (Cast & Crew) */}
        <ArtistsSection
          onSelectArtist={(artist) => setSelectedArtist(artist)}
          onOpenAllArtists={() => setIsAboutOpen(true)}
          setCursorText={setCursorText}
        />

        {/* 8. Moments ("From the Wings" Gallery & Lightbox) */}
        <GallerySection
          onSelectMoment={(moment) => setSelectedMoment(moment)}
          onOpenFullGallery={() => setSelectedMoment({
            id: 'moment-all',
            title: 'Stage & Rehearsal Moments',
            category: 'Stage Light',
            caption: 'The solitary amber cone before actors take their marks.',
            image: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80'
          })}
          setCursorText={setCursorText}
        />

        {/* 9. 3-Column Pop-Art Cards (Matches Screenshot 4) */}
        <ContactSection
          onOpenBooking={() => setIsBookingOpen(true)}
          onOpenInvite={() => setIsInviteOpen(true)}
          setCursorText={setCursorText}
        />

        {/* 10. From The Archive (YouTube Channel Embed) */}
        <ArchiveSection
          setCursorText={setCursorText}
        />

        {/* 11. FAQ Section */}
        <FaqSection
          onOpenInvite={() => setIsInviteOpen(true)}
          setCursorText={setCursorText}
        />
      </main>

      {/* 12. Editorial Footer */}
      <Footer
        onNavigate={scrollToSection}
        onOpenInvite={() => setIsInviteOpen(true)}
        onOpenBooking={() => setIsBookingOpen(true)}
        setCursorText={setCursorText}
      />

      {/* Interactive Modals */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        setCursorText={setCursorText}
      />

      <InviteModal
        isOpen={isInviteOpen}
        onClose={() => setIsInviteOpen(false)}
        setCursorText={setCursorText}
      />

      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
        setCursorText={setCursorText}
      />

      <ArtistModal
        artist={selectedArtist}
        isOpen={!!selectedArtist}
        onClose={() => setSelectedArtist(null)}
        setCursorText={setCursorText}
      />

      <GalleryModal
        moment={selectedMoment}
        isOpen={!!selectedMoment}
        onClose={() => setSelectedMoment(null)}
        setCursorText={setCursorText}
      />

      <ShowInfoModal
        isOpen={isShowInfoOpen}
        onClose={() => setIsShowInfoOpen(false)}
        onOpenBooking={() => setIsBookingOpen(true)}
        setCursorText={setCursorText}
      />

      <AboutModal
        isOpen={isAboutOpen}
        onClose={() => setIsAboutOpen(false)}
        onOpenInvite={() => setIsInviteOpen(true)}
        setCursorText={setCursorText}
      />

    </div>
  );
}
