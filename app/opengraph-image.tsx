import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const alt = 'Carrillo ABGD — Firma LegalTech en Cali, Colombia';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #020205 0%, #0A0F1E 50%, #050505 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
        }}
      >
        {/* Decorative glow */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(81,103,156,0.3) 0%, transparent 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-50px',
            right: '-50px',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(157,168,197,0.2) 0%, transparent 70%)',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: '8px',
            }}
          >
            CARRILLO
          </div>
          <div
            style={{
              fontSize: '80px',
              fontWeight: 900,
              background: 'linear-gradient(90deg, #9DA8C5, #ffffff, #9DA8C5)',
              backgroundClip: 'text',
              color: 'transparent',
              letterSpacing: '-2px',
              lineHeight: 1,
              marginBottom: '32px',
            }}
          >
            ABGD
          </div>

          {/* Divider */}
          <div
            style={{
              width: '120px',
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #9DA8C5, transparent)',
              marginBottom: '32px',
            }}
          />

          <div
            style={{
              fontSize: '24px',
              color: '#9DA8C5',
              letterSpacing: '8px',
              textTransform: 'uppercase',
              fontWeight: 300,
              marginBottom: '16px',
            }}
          >
            Firma Legal Digital
          </div>

          <div
            style={{
              fontSize: '18px',
              color: '#7B7C7D',
              fontWeight: 400,
            }}
          >
            Cali, Colombia — 30 Años de Experiencia
          </div>
        </div>

        {/* Bottom badge */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 20px',
            borderRadius: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(255,255,255,0.05)',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: '#9DA8C5',
            }}
          />
          <span style={{ color: '#9DA8C5', fontSize: '14px', letterSpacing: '3px', textTransform: 'uppercase' }}>
            Coming Marzo 2026
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
