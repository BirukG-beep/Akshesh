'use client';

import dynamic from 'next/dynamic';

const DynamicMapContent = dynamic(
  () => import('@/app/components/Home/DynamicMapContent'),
  {
    ssr: false,
    loading: () => (
      <div
        style={{
          width: '100%',
          height: '100vh',
          background: '#0f0e0c',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#c8a96e',
          fontFamily: 'serif',
          fontSize: '1.4rem',
          letterSpacing: '0.2em',
        }}
      >
        Loading map…
      </div>
    ),
  }
);


export default function MapPage() {
  return <DynamicMapContent />;
}