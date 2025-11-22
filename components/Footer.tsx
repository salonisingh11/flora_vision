import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {

  return (
    <footer className="bg-[#1A201A] py-8 sm:py-10 md:py-12">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Left Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/Plant_icon.png"
                alt="Plant Icon"
                width={24}
                height={24}
                className="w-6 h-6"
              />
              <span className="text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>FloraVision.</span>
            </div>
            <p className="text-white text-sm leading-relaxed" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
              From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment.
            </p>
          </div>

          {/* Middle Column */}
          <div>
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>Quick Link&apos;s</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white underline" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                  Home
                </a>
              </li>
              <li>
                <a href="#plants" className="text-white underline" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                  Type&apos;s Of plant&apos;s
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white underline" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-white underline" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}>
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column */}
          <div>
            <h3 className="text-white font-semibold mb-4" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>For Every Update.</h3>
            <form className="relative">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-24 sm:pr-28 md:pr-32 rounded-lg bg-[rgba(26,32,26,0.8)] border border-white/20 text-white placeholder:text-white/75 text-sm sm:text-base"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, lineHeight: '100%', letterSpacing: '0%' }}
                required
                aria-label="Email address"
              />
              <button
                type="submit"
                className="absolute right-1 top-1 bottom-1 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 bg-white text-[#1A201A] rounded-lg font-semibold text-xs sm:text-sm md:text-base"
                style={{ fontFamily: 'var(--font-inter), Inter, sans-serif'}}
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row - Social Links and Copyright */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-white font-bold uppercase"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, fontSize: '16px'}}
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href="#"
              className="text-white font-bold uppercase"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, fontSize: '16px'}}
              aria-label="Twitter"
            >
              TW
            </a>
            <a
              href="#"
              className="text-white font-bold uppercase"
              style={{ fontFamily: 'var(--font-inter), Inter, sans-serif', fontWeight: 400, fontSize: '16px' }}
              aria-label="LinkedIn"
            >
              LI
            </a>
          </div>
          <p className="text-white text-xs sm:text-sm text-center sm:text-left">
            FloraVision © all right reserve
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

