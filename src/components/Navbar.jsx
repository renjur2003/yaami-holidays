import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, User } from 'lucide-react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for tailwind classes (can be moved to Utils later)
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-black/90 backdrop-blur-md py-4 shadow-lg shadow-yaami-gold/10" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img 
            src="/logo.png" 
            alt="Yaami Holidays Logo" 
            className="h-16 w-16 object-cover rounded-full transition-all duration-300 group-hover:scale-105 shadow-lg shadow-yaami-gold/20"
          />
          <span className="text-xl font-serif font-bold text-yaami-gold group-hover:text-yaami-gold/80 transition-colors">
            Yaami Holidays
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/category/houseboat">Houseboats</NavLink>
          <NavLink to="/category/shikara">Shikara</NavLink>
          <NavLink to="/about">About Us</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <a href="tel:8547964084" className="flex items-center gap-2 text-sm text-gray-300 hover:text-yaami-gold transition-colors">
            <Phone size={16} />
            <span>+91 85479 64084</span>
          </a>
          {/* Admin Link Secret/Hidden or just visible for demo */}
          {/* <Link to="/admin" className="text-xs text-gray-600 hover:text-white">Admin</Link> */}
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-t border-gray-800 p-6 flex flex-col gap-4 shadow-xl">
          <MobileNavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</MobileNavLink>
          <MobileNavLink to="/category/houseboat" onClick={() => setIsMobileMenuOpen(false)}>Houseboats</MobileNavLink>
          <MobileNavLink to="/category/shikara" onClick={() => setIsMobileMenuOpen(false)}>Shikara</MobileNavLink>
           <MobileNavLink to="/category/speed-boat" onClick={() => setIsMobileMenuOpen(false)}>Speed Boat</MobileNavLink>
          <MobileNavLink to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</MobileNavLink>
          <div className="pt-4 border-t border-gray-800 flex flex-col gap-3">
             <a href="tel:8547964084" className="flex items-center gap-2 text-yaami-gold">
                <Phone size={16} /> +91 85479 64084
             </a>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, children }) => (
  <Link to={to} className="text-gray-300 hover:text-yaami-gold font-medium transition-colors text-sm uppercase tracking-wide">
    {children}
  </Link>
);

const MobileNavLink = ({ to, children, onClick }) => (
  <Link to={to} onClick={onClick} className="text-lg text-white font-serif hover:text-yaami-gold block py-2 border-b border-gray-900">
    {children}
  </Link>
);

export default Navbar;
