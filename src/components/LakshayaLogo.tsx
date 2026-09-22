export const LakshayaLogo = ({ size = 48, showText = true }: { size?: number; showText?: boolean }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', textDecoration: 'none' }}>
      {/* Authentic Lakshaya Shield Crest */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flexShrink: 0, filter: 'drop-shadow(0 2px 6px rgba(11, 26, 48, 0.25))' }}
      >
        {/* Shield Outer Border */}
        <path
          d="M50 4C74 4 88 12 90 26C90 62 68 86 50 96C32 86 10 62 10 26C12 12 26 4 50 4Z"
          fill="url(#crestNavyGrad)"
          stroke="#f59e0b"
          strokeWidth="2.5"
        />

        {/* Inner Shield Inset */}
        <path
          d="M50 8C70 8 82 15 84 27C84 58 65 79 50 88C35 79 16 58 16 27C18 15 30 8 50 8Z"
          fill="#061224"
          stroke="rgba(245, 158, 11, 0.4)"
          strokeWidth="1"
        />

        {/* Golden Laurel Wreath Leaves */}
        <g stroke="#f59e0b" strokeWidth="1.2" fill="none" opacity="0.85">
          <path d="M26 48C24 40 28 32 34 26" />
          <path d="M24 44C27 43 30 46 30 48" fill="#f59e0b" />
          <path d="M27 36C30 36 33 39 32 41" fill="#f59e0b" />
          <path d="M32 29C35 30 37 34 35 36" fill="#f59e0b" />

          <path d="M74 48C76 40 72 32 66 26" />
          <path d="M76 44C73 43 70 46 70 48" fill="#f59e0b" />
          <path d="M73 36C70 36 67 39 68 41" fill="#f59e0b" />
          <path d="M68 29C65 30 63 34 65 36" fill="#f59e0b" />
        </g>

        {/* Circular Sunburst Disc */}
        <circle cx="50" cy="38" r="18" fill="url(#sunRedGrad)" stroke="#f59e0b" strokeWidth="1.5" />

        {/* Sacred Flame of Wisdom (ज्ञान दीप) */}
        <path
          d="M50 24C52 29 55 31 55 35C55 39 52 42 50 42C48 42 45 39 45 35C45 31 48 29 50 24Z"
          fill="#fbbf24"
        />
        <path
          d="M50 28C51 31 53 32 53 35C53 37 51 39 50 39C49 39 47 37 47 35C47 32 49 31 50 28Z"
          fill="#ef4444"
        />

        {/* Open Book of Knowledge */}
        <path
          d="M50 48C45 44 38 45 35 47V56C38 54 45 53 50 57C55 53 62 54 65 56V47C62 45 55 44 50 48Z"
          fill="#ffffff"
          stroke="#0a192f"
          strokeWidth="0.8"
        />
        <line x1="50" y1="48" x2="50" y2="57" stroke="#0a192f" strokeWidth="1" />

        {/* Banner Ribbon at Base */}
        <path
          d="M20 68L26 63H74L80 68L76 74H24L20 68Z"
          fill="#ed1c25"
          stroke="#f59e0b"
          strokeWidth="1"
        />
        <text
          x="50"
          y="71.5"
          textAnchor="middle"
          fontSize="5.5"
          fontWeight="900"
          fontFamily="'Cinzel', serif"
          fill="#ffffff"
          letterSpacing="0.08em"
        >
          LAKSHAYA
        </text>

        {/* Sub-text on shield */}
        <text
          x="50"
          y="83"
          textAnchor="middle"
          fontSize="4"
          fontWeight="700"
          fontFamily="'Outfit', sans-serif"
          fill="#fef3c7"
          letterSpacing="0.05em"
        >
          INT. SCHOOL
        </text>

        <defs>
          <linearGradient id="crestNavyGrad" x1="10" y1="4" x2="90" y2="96" gradientUnits="userSpaceOnUse">
            <stop stopColor="#122a52" />
            <stop offset="0.5" stopColor="#0a192f" />
            <stop offset="1" stopColor="#040b17" />
          </linearGradient>
          <linearGradient id="sunRedGrad" x1="32" y1="20" x2="68" y2="56" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ef4444" />
            <stop offset="1" stopColor="#b91c1c" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Typography */}
      {showText && (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.05rem, 2.2vw, 1.35rem)',
            fontWeight: 800,
            color: 'var(--primary-950)',
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            whiteSpace: 'nowrap'
          }}>
            <span>LAKSHAYA</span>
            <span style={{
              color: '#ed1c25',
              fontSize: '0.68rem',
              fontWeight: 800,
              backgroundColor: 'rgba(237, 28, 37, 0.1)',
              border: '1px solid rgba(237, 28, 37, 0.3)',
              padding: '0.1rem 0.4rem',
              borderRadius: '4px',
              letterSpacing: '0.05em'
            }}>
              AHMEDABAD
            </span>
          </div>

          <div style={{
            fontSize: '0.72rem',
            fontWeight: 700,
            color: '#475569',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            lineHeight: 1.25
          }}>
            International School
          </div>

          <div style={{
            fontSize: '0.62rem',
            color: '#ed1c25',
            fontWeight: 700,
            letterSpacing: '0.04em',
            fontStyle: 'italic'
          }}>
            Knowledge is the Supreme Goal
          </div>
        </div>
      )}
    </div>
  );
};
