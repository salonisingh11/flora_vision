'use client';

import React from 'react';
import Image from 'next/image';
import Button from './Button';
import HeroTestimonialCard from './HeroTestimonialCard';

const HeroBanner: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 relative z-30 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              Earth&apos;s Exhale
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
              &quot;Earth Exhale&quot; symbolizes the purity and vitality of the Earth&apos;s natural environment and its essential role in sustaining life.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4 items-center">
              <Button variant="outline" className="text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Buy Now</Button>
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
                <span className="text-base sm:text-lg md:text-xl text-white" style={{ fontFamily: 'var(--font-indie-flower), "Indie Flower", cursive' }}>Live Demo...</span>
              </div>
            </div>

            {/* Testimonial Card */}
            <div className="mt-6 sm:mt-8 max-w-md">
              <HeroTestimonialCard
                name="Ronnie Hamill"
                avatar="/hero_img1.png"
                rating={4.5}
                review="I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home."
              />
            </div>
          </div>

          {/* Right Content - Featured Product Card */}
          <div className="relative mt-8 lg:mt-0 lg:absolute lg:right-4 xl:right-8 2xl:right-16 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-sm mx-auto lg:mx-0">
            <div 
              className="relative bg-[rgba(26,32,26,0.05)] backdrop-blur-md overflow-visible shadow-sm w-full"
              style={{ borderRadius: '32px', position: 'relative' }}
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
                viewBox="0 0 320 400"
                preserveAspectRatio="none"
                style={{ zIndex: 1, overflow: 'visible' }}
              >
                <path
                  d="M 32,0 
                     Q 160,40 288,0
                     Q 320,0 320,32
                     L 320,368
                     Q 320,400 288,400
                     L 32,400
                     Q 0,400 0,368
                     L 0,32
                     Q 0,0 32,0 Z"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.05)"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Plant Image with overflow */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 mb-4 overflow-visible pt-12" style={{ zIndex: 3 }}>
                <div className="absolute inset-0" style={{ top: '-60px', left: '-20px', right: '-20px', bottom: '-20px' }}>
                  <Image
                    src="/Aglaonema.png"
                    alt="Aglaonema plant"
                    fill
                    className="object-contain"
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                    style={{ objectPosition: 'center' }}
                  />
                </div>
              </div>
              
              <div className="px-4 sm:px-8 md:px-12 lg:px-16 pb-4 sm:pb-6 relative" style={{ zIndex: 3 }}>
                <p className="text-sm sm:text-base text-white mb-1" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Indoor Plant</p>
                <div className="flex items-center gap-4 sm:gap-8 md:gap-12 lg:gap-24 mb-4">
                  <h3 className="text-lg sm:text-xl md:text-2xl text-white whitespace-nowrap" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Aglaonema plant</h3>
                  <Image
                    src="/arrow.png"
                    alt="Next"
                    width={16}
                    height={16}
                    className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                  />
                </div>
                <Button variant="outline" className="px-4 sm:px-6 md:px-8 py-2 mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>Buy Now</Button>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-2 rounded-full bg-white"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                  <div className="w-2 h-2 rounded-full bg-white/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;

