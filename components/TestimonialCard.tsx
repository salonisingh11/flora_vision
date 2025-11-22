import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  className?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  avatar,
  rating,
  review,
  className = ''
}) => {
  return (
    <div 
      className={`relative bg-[rgba(26,32,26,0.8)] backdrop-blur-md rounded-3xl overflow-hidden shadow-sm ${className}`}
    >
      {/* Wavy top edge */}
      <svg
        className="absolute top-0 left-0 w-full"
        viewBox="0 0 320 40"
        preserveAspectRatio="none"
        style={{ height: '40px', zIndex: 0 }}
      >
        <path
          d="M0,0 Q160,40 320,0 L320,40 L0,40 Z"
          fill="rgba(26,32,26,0.8)"
        />
      </svg>

      {/* Border SVG that follows the wavy shape */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 200"
        preserveAspectRatio="none"
        style={{ zIndex: 1 }}
      >
        <path
          d="M 24,0 
             Q 160,40 296,0
             Q 320,0 320,24
             L 320,176
             Q 320,200 296,200
             L 24,200
             Q 0,200 0,176
             L 0,24
             Q 0,0 24,0 Z"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Card content */}
      <div className="pt-10 sm:pt-12 px-4 sm:px-6 pb-4 sm:pb-6 relative" style={{ zIndex: 2 }}>
        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
        {/* Profile icon on the left of name */}
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white rounded-full border-2 border-gray-800 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-md" style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2), 0 2px 4px rgba(0, 0, 0, 0.1)' }}>
          {avatar && (avatar.startsWith('http') || avatar.startsWith('/')) ? (
            <Image
              src={avatar}
              alt={name}
              width={64}
              height={64}
              quality={100}
              className="w-full h-full object-cover rounded-full"
              unoptimized={avatar.startsWith('http')}
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-gray-800 text-xs font-bold" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="text-white text-sm sm:text-base font-semibold mb-1 sm:mb-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{name}</h4>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, i) => {
              const isFullStar = i < Math.floor(rating);
              const isHalfStar = i === Math.floor(rating) && rating % 1 >= 0.5;
              return (
                <div key={i} className="relative w-3 h-3 sm:w-4 sm:h-4">
                  <svg
                    className={`w-3 h-3 sm:w-4 sm:h-4 ${isFullStar ? 'text-yellow-400' : 'text-gray-600'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  {isHalfStar && (
                    <svg
                      className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      style={{ clipPath: 'inset(0 50% 0 0)' }}
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <p className="text-white text-sm sm:text-base font-normal leading-relaxed text-left" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

