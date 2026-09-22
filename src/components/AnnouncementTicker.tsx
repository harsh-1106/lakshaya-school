import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ANNOUNCEMENTS } from '../data/schoolData';

interface AnnouncementTickerProps {
  onSelectAnnouncement?: (id: string) => void;
  onOpenAdmission: () => void;
}

export const AnnouncementTicker = ({ onOpenAdmission }: AnnouncementTickerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const current = ANNOUNCEMENTS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + ANNOUNCEMENTS.length) % ANNOUNCEMENTS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ANNOUNCEMENTS.length);
  };

  return (
    <section style={{
      backgroundColor: 'var(--primary-900)',
      color: '#ffffff',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      position: 'relative',
      zIndex: 30
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: '0.625rem',
        paddingBottom: '0.625rem',
        gap: '1rem',
        flexWrap: 'wrap'
      }}>
        {/* Label Tag */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: 'rgba(245, 158, 11, 0.15)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          padding: '0.25rem 0.75rem',
          borderRadius: 'var(--radius-full)',
          flexShrink: 0
        }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-gold)',
            display: 'inline-block',
            boxShadow: '0 0 8px var(--accent-gold)'
          }} className="animate-glow" />
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)'
          }}>
            Campus Bulletin
          </span>
        </div>

        {/* Active Announcement Content */}
        <div
          style={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            overflow: 'hidden',
            cursor: 'pointer'
          }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={onOpenAdmission}
        >
          <span style={{
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            fontSize: '0.7rem',
            fontWeight: 700,
            padding: '0.15rem 0.5rem',
            borderRadius: '4px',
            color: '#f8fafc',
            flexShrink: 0
          }}>
            {current.badge || current.category}
          </span>

          <p style={{
            fontSize: '0.875rem',
            color: '#ffffff',
            fontWeight: 500,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            margin: 0
          }}>
            <strong style={{ color: 'var(--accent-gold)', marginRight: '0.5rem' }}>{current.title}:</strong>
            <span>{current.summary}</span>
          </p>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          <span style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.6)', marginRight: '0.25rem' }}>
            {currentIndex + 1} / {ANNOUNCEMENTS.length}
          </span>

          <button
            onClick={handlePrev}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '26px',
              height: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            aria-label="Previous announcement"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            onClick={handleNext}
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              border: 'none',
              borderRadius: '50%',
              width: '26px',
              height: '26px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              cursor: 'pointer',
              transition: 'background var(--transition-fast)'
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.25)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            aria-label="Next announcement"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};
