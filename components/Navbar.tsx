import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {

  return (
    <nav className="w-full bg-transparent z-50">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-1 sm:gap-2">
            <Image
              src="/Plant_icon.png"
              alt="Plant Icon"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
            />
            <span className="text-lg sm:text-xl md:text-2xl font-bold text-white" style={{ fontFamily: 'var(--font-inter), Inter, sans-serif' }}>FloraVision.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            <a href="#" className="text-white text-base lg:text-xl" style={{ fontFamily: 'var(--font-indie-flower), "Indie Flower", cursive' }}>
              Home
            </a>
            <div className="relative group">
              <a href="#" className="text-white text-base lg:text-xl flex items-center gap-1" style={{ fontFamily: 'var(--font-indie-flower), "Indie Flower", cursive' }}>
                Plants Type
                <Image
                  src="/dropdown-arrow.svg"
                  alt="Dropdown"
                  width={12}
                  height={8}
                  className="w-3 h-2"
                />
              </a>
            </div>
            <a href="#" className="text-white text-base lg:text-xl" style={{ fontFamily: 'var(--font-indie-flower), "Indie Flower", cursive' }}>
              More
            </a>
            <a href="#" className="text-white text-base lg:text-xl" style={{ fontFamily: 'var(--font-indie-flower), "Indie Flower", cursive' }}>
              Contact
            </a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-12">
            <button
              className="rounded"
              aria-label="Search"
            >
              <Image
                src="/search.png"
                alt="Search"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
            <button
              className="rounded"
              aria-label="Shopping cart"
            >
              <Image
                src="/bag.png"
                alt="Shopping cart"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
            <button
              className="rounded"
              aria-label="Menu"
            >
              <Image
                src="/menu-2lines.svg"
                alt="Menu"
                width={24}
                height={24}
                className="w-5 h-5 sm:w-6 sm:h-6"
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

