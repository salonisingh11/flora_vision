import React from 'react';
import Image from 'next/image';

interface PlantCardProps {
  image: string;
  name: string;
  description?: string;
  price: string;
  showCartIcon?: boolean;
  className?: string;
}

const PlantCard: React.FC<PlantCardProps> = ({
  image,
  name,
  description,
  price,
  showCartIcon = true,
  className = ''
}) => {
  return (
    <div 
      className={`relative bg-[rgba(26,32,26,0.8)] backdrop-blur-md overflow-visible shadow-sm w-full max-w-sm flex flex-col ${className}`}
      style={{ borderRadius: '24px', position: 'relative', minHeight: '400px' }}
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

      {/* Border SVG that follows the wavy shape with smooth corners */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 320 200"
        preserveAspectRatio="none"
        style={{ zIndex: 1, overflow: 'visible' }}
      >
        <path
          d="M 32,0 
             Q 160,40 288,0
             Q 320,0 320,32
             L 320,168
             Q 320,200 288,200
             L 32,200
             Q 0,200 0,168
             L 0,32
             Q 0,0 32,0 Z"
          fill="none"
          stroke="rgba(255, 255, 255, 0.2)"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Card content */}
      <div className="pt-8 sm:pt-10 md:pt-12 px-4 sm:px-6 pb-4 sm:pb-6 relative flex flex-col h-full min-h-[350px] sm:min-h-[400px]" style={{ zIndex: 3 }}>
        {/* Plant Image */}
        <div className="relative w-full h-36 sm:h-40 md:h-48 mb-3 sm:mb-4" style={{ overflow: 'visible' }}>
          {image && (image.startsWith('http') || image.startsWith('/')) ? (
            <div className="absolute inset-0" style={{ top: '-60px', left: '-15px', right: '-15px', bottom: '-15px' }}>
              <Image
                src={image}
                alt={name}
                fill
                className="object-contain"
                quality={100}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                style={{ objectPosition: 'center' }}
              />
            </div>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{name}</span>
            </div>
          )}
        </div>

        {/* Plant Name */}
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-2" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{name}</h3>
        
        {/* Description */}
        {description && (
          <p className="text-gray-300 text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed flex-grow" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{description}</p>
        )}

        {/* Price and Cart Icon - Fixed at bottom */}
        <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4">
          <span className="text-white text-lg sm:text-xl md:text-2xl font-semibold" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>{price}</span>
          {showCartIcon && (
            <button
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[rgba(26,32,26,0.8)] border border-gray flex items-center justify-center shadow-md flex-shrink-0"
              style={{ borderWidth: '1.75px' }}
              aria-label="Add to cart"
            >
              <Image
                src="/bag.png"
                alt="Shopping bag"
                width={20}
                height={20}
                className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlantCard;

