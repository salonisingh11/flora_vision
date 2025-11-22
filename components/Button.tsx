import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  type = 'button',
  style
}) => {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium';
  
  const variants = {
    primary: 'bg-[#1A201A] border border-white text-white',
    secondary: 'bg-transparent border border-white text-white',
    outline: 'bg-transparent border border-white text-white'
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;

