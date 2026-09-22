import { useState } from 'react';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  title: string;
  category: string;
  description: string;
  url: string;
}

export const CampusVirtualTour = () => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);

  const galleryItems: GalleryPhoto[] = [
    {
      id: 'g1',
      title: 'Earthquake-Resistant Safe Campus',
      category: 'Campus & Classrooms',
      description: 'Architecturally engineered seismic protection with wide corridors and safe assembly grounds.',
      url: 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g2',
      title: 'Sunlit Smart Digital Classrooms',
      category: 'Campus & Classrooms',
      description: 'Abundant daylight and cross-ventilation paired with interactive smart boards for healthy learning.',
      url: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g3',
      title: 'Shilaj Farm Eco-Learning Excursions',
      category: 'Shilaj Eco Farm',
      description: 'Hands-on organic farming, soil biodiversity study, and environmental conservation in nature.',
      url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g4',
      title: 'All-India Shito-Ryu Karate Dojo',
      category: 'Karate & Sports',
      description: 'Dedicated martial arts dojo training state and national gold medalists in discipline and self-defense.',
      url: 'https://images.unsplash.com/photo-1555597673-b21d5c935865?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g5',
      title: 'Annual Lakshaya Art Exhibition',
      category: 'Art & Culture',
      description: 'Hundreds of student paintings, pottery sculptures, and mixed-media installations displayed at our campus.',
      url: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g6',
      title: 'Festive X\'mas Pajama Party Celebrations',
      category: 'Art & Culture',
      description: 'A beloved Lakshaya annual tradition fostering warmth, joyous cross-cultural celebration, and bonding.',
      url: 'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g7',
      title: 'Skating Rink & Track Competitions',
      category: 'Karate & Sports',
      description: 'Smooth championship rink where Lakshaya speed skaters train for inter-school medal tournaments.',
      url: 'https://images.unsplash.com/photo-1517649763962-0c623266ddc0?auto=format&fit=crop&w=1200&q=80'
    },
    {
      id: 'g8',
      title: 'Discovery Science & Robotic Laboratories',
      category: 'Campus & Classrooms',
      description: 'Modern empirical apparatus where students explore physics, chemistry, biology, and computer coding.',
      url: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1200&q=80'
    }
  ];

  const categories = ['All', 'Campus & Classrooms', 'Shilaj Eco Farm', 'Karate & Sports', 'Art & Culture'];

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedFilter);

  const handleNextPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % filteredItems.length);
  };

  const handlePrevPhoto = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + filteredItems.length) % filteredItems.length);
  };

  return (
    <section id="gallery" className="section-wrapper bg-gallery-dark" style={{
      borderTop: '1px solid rgba(255, 255, 255, 0.08)'
    }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-tag badge-gold">
            <Camera size={14} />
            <span>Campus Visual Tour</span>
          </div>
          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Life Through the Lakshaya Lens
          </h2>
          <p className="section-subtitle" style={{ color: '#cbd5e1' }}>
            Explore glimpses of our vibrant campus, organic farm learning, championship martial arts dojo, 
            and annual art exhibits on Sardar Patel Ring Road, Ahmedabad.
          </p>
        </div>

        {/* Filter Pills */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat) => {
            const isSelected = cat === selectedFilter;
            return (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                style={{
                  padding: '0.55rem 1.15rem',
                  borderRadius: 'var(--radius-full)',
                  border: isSelected ? '2px solid var(--accent-gold)' : '1px solid rgba(255, 255, 255, 0.15)',
                  backgroundColor: isSelected ? 'rgba(245, 158, 11, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                  color: isSelected ? 'var(--accent-gold)' : '#cbd5e1',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Photo Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '1.25rem'
        }}>
          {filteredItems.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setActivePhotoIndex(index)}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                height: '240px',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4)'
              }}
            >
              <img
                src={photo.url}
                alt={photo.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform var(--transition-slow)'
                }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              />

              {/* Hover overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(6, 14, 26, 0.88) 0%, transparent 60%)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                padding: '1.25rem'
              }}>
                <div style={{
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  marginBottom: '0.2rem'
                }}>
                  {photo.category}
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.25
                }}>
                  {photo.title}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhotoIndex !== null && filteredItems[activePhotoIndex] && (
          <div className="lightbox-modal" onClick={() => setActivePhotoIndex(null)}>
            <div onClick={e => e.stopPropagation()} style={{ position: 'relative', maxWidth: '850px', width: '100%' }}>
              <button
                onClick={() => setActivePhotoIndex(null)}
                style={{
                  position: 'absolute',
                  top: '-40px',
                  right: '0',
                  background: 'none',
                  border: 'none',
                  color: '#ffffff',
                  cursor: 'pointer'
                }}
                aria-label="Close lightbox"
              >
                <X size={28} />
              </button>

              <div style={{ position: 'relative' }}>
                <img
                  src={filteredItems[activePhotoIndex].url}
                  alt={filteredItems[activePhotoIndex].title}
                  className="lightbox-image"
                  style={{ width: '100%', height: 'auto', display: 'block' }}
                />

                {/* Left/Right navigation buttons */}
                <button
                  onClick={handlePrevPhoto}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '1rem',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Previous"
                >
                  <ChevronLeft size={24} />
                </button>

                <button
                  onClick={handleNextPhoto}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    right: '1rem',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer'
                  }}
                  aria-label="Next"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              <div style={{
                backgroundColor: 'rgba(11, 26, 48, 0.95)',
                color: '#ffffff',
                padding: '1.25rem 1.5rem',
                borderRadius: '0 0 var(--radius-md) var(--radius-md)'
              }}>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 700, textTransform: 'uppercase' }}>
                  {filteredItems[activePhotoIndex].category}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: '#ffffff', margin: '0.25rem 0' }}>
                  {filteredItems[activePhotoIndex].title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: '#cbd5e1' }}>
                  {filteredItems[activePhotoIndex].description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
