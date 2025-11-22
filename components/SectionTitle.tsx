import React from 'react';

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  bracketColor1?: string;
  bracketColor2?: string;
  bracketColor3?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  children, 
  className = '',
  bracketColor1,
  bracketColor2,
  bracketColor3
}) => {
  const leftGradientId = `leftGradient-${Math.random().toString(36).substr(2, 9)}`;
  const rightGradientId = `rightGradient-${Math.random().toString(36).substr(2, 9)}`;
  
  // Gradient colors from Figma design (default green, can be overridden)
  const vibrantGreen = bracketColor1 || '#55B000';
  const Grey = bracketColor2 || '#677259';
  const darkOlive = bracketColor3 || '#50790B';
  
  return (
    <div className={`text-center mb-8 sm:mb-10 md:mb-12 ${className}`}>
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white inline-block relative px-8 sm:px-12 md:px-16 lg:px-20 py-4 sm:py-5 md:py-6 lg:py-7" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 600, textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)' }}>
        {/* Left L-shaped bracket with curve */}
        <div 
          className="absolute h-full ml-2 md:ml-4 lg:ml-12"
          style={{ zIndex: 1, width: '60px', top: '25px', left: '10px'}}
        >
          <svg width="60" height="80" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id={leftGradientId} gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="60" y2="0">
                <stop offset="0%" stopColor={vibrantGreen} />
                <stop offset="15.66%" stopColor={Grey} />
                <stop offset="100%" stopColor={darkOlive} />
              </linearGradient>
            </defs>
            <path d="M 5 0 
                     L 5 25 
                     Q 5 40 18 40 
                     L 40 40" 
                  stroke={`url(#${leftGradientId})`} 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </div>
        
        <span style={{ position: 'relative', transform: 'translateX(-100%)', zIndex: 2 }}>{children}</span>
        
        {/* Right L-shaped bracket with curve */}
        <div 
          className="absolute h-full lg:mr-12"
          style={{ zIndex: 1, width: '60px', bottom: '25px', right: '10px' }}
        >
          <svg width="60" height="80" viewBox="0 0 60 80" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <defs>
              <linearGradient id={rightGradientId} gradientUnits="userSpaceOnUse" x1="20" y1="40" x2="55" y2="80">
                <stop offset="0%" stopColor={darkOlive} />
                <stop offset="40%" stopColor={Grey} />
                <stop offset="100%" stopColor={vibrantGreen} />
              </linearGradient>
            </defs>
            <path d="M 20 40 
                     L 45 40 
                     Q 55 40 55 55
                     L 55 80" 
                  stroke={`url(#${rightGradientId})`} 
                  strokeWidth="2.5" 
                  fill="none" 
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
        </div>
      </h2>
    </div>
  );
};

export default SectionTitle;

