import { useState } from 'react';
import { TopBar } from './components/TopBar';
import { Navbar } from './components/Navbar';
import { AnnouncementTicker } from './components/AnnouncementTicker';
import { Hero } from './components/Hero';
import { VisionMission } from './components/VisionMission';
import { LakshayaIdentity } from './components/LakshayaIdentity';
import { DevelopmentalPentagon } from './components/DevelopmentalPentagon';
import { FocusPillars } from './components/FocusPillars';
import { AcademicWings } from './components/AcademicWings';
import { CampusShowcase } from './components/CampusShowcase';
import { CampusVirtualTour } from './components/CampusVirtualTour';
import { BeyondClassroom } from './components/BeyondClassroom';
import { AchievementsWall } from './components/AchievementsWall';
import { Testimonials } from './components/Testimonials';
import { AdmissionsCTA } from './components/AdmissionsCTA';
import { Footer } from './components/Footer';
import { AdmissionModal } from './components/AdmissionModal';
import { BrochureModal } from './components/BrochureModal';
import { FloatingAssistant } from './components/FloatingAssistant';

export function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  const handleOpenAdmission = () => setAdmissionModalOpen(true);
  const handleCloseAdmission = () => setAdmissionModalOpen(false);

  const handleOpenBrochure = () => setBrochureModalOpen(true);
  const handleCloseBrochure = () => setBrochureModalOpen(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Top Utility Header */}
      <TopBar
        onOpenAdmission={handleOpenAdmission}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 2. Main Sticky Navigation */}
      <Navbar
        onOpenAdmission={handleOpenAdmission}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* 3. Live Campus News Ticker */}
      <AnnouncementTicker
        onOpenAdmission={handleOpenAdmission}
      />

      <main style={{ flex: 1 }}>
        {/* 4. Prestigious Hero Section with Interactive Age/Grade Matcher */}
        <Hero
          onOpenAdmission={handleOpenAdmission}
          onOpenBrochure={handleOpenBrochure}
        />

        {/* 5. Vision, Mission & Leadership Spotlight */}
        <VisionMission />

        {/* 6. Meaning of Lakshaya, Logo Symbolism, Beliefs & Founder */}
        <LakshayaIdentity />

        {/* 7. Signature Developmental Pentagon Pedagogy with Interactive Geometry */}
        <DevelopmentalPentagon
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 8. The 8 Core Focus Pillars (Preserving lakshayaschool.com Focus On) */}
        <FocusPillars
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 9. Academic Wings (Early Years to Senior Secondary) */}
        <AcademicWings
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 10. Campus Showcase & Earthquake Resilient Safety */}
        <CampusShowcase
          onOpenAdmission={handleOpenAdmission}
        />

        {/* 11. Campus Virtual Visual Tour & Lightbox */}
        <CampusVirtualTour />

        {/* 12. Beyond Textbooks (Art Exhibition, Shilaj Farm, Karate, Festivals) */}
        <BeyondClassroom />

        {/* 13. Achievements & Medals Wall of Fame */}
        <AchievementsWall />

        {/* 14. Testimonials & Accreditations */}
        <Testimonials />

        {/* 15. Admissions 2025-26 Call to Action */}
        <AdmissionsCTA
          onOpenAdmission={handleOpenAdmission}
          onOpenBrochure={handleOpenBrochure}
        />
      </main>

      {/* 16. Institutional Footer */}
      <Footer />

      {/* Floating Admissions Counselor Help Pill */}
      <FloatingAssistant
        onOpenAdmission={handleOpenAdmission}
        onOpenBrochure={handleOpenBrochure}
      />

      {/* Interactive Modals */}
      <AdmissionModal
        isOpen={admissionModalOpen}
        onClose={handleCloseAdmission}
      />

      <BrochureModal
        isOpen={brochureModalOpen}
        onClose={handleCloseBrochure}
      />
    </div>
  );
}

export default App;
