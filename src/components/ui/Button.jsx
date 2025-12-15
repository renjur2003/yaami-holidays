import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper if not centralized yet
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-yaami-gold text-black hover:bg-yellow-500 shadow-lg shadow-yaami-gold/20",
    outline: "border border-yaami-gold text-yaami-gold hover:bg-yaami-gold/10",
    ghost: "text-white hover:text-yaami-gold hover:bg-white/5",
    white: "bg-white text-black hover:bg-gray-100",
  };

  return (
    <button className={cn(baseStyles, variants[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
