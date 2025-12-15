import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yaami-dark text-white pt-16 pb-6 border-t border-gray-800">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-serif font-bold text-yaami-gold mb-4">Yaami Holidays</h2>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Experience the serene beauty of Alleppey backwaters with our premium houseboat and shikara services. Luxury meets tradition.
          </p>
          <div className="flex gap-4">
            <SocialIcon link="https://www.instagram.com/yaamiholidays?igsh=MTZzcWUzdGVxYnJkcQ%3D%3D&utm_source=qr" icon={<Instagram size={20} />} />
            <SocialIcon link="https://www.facebook.com/share/16scXgwW6B/?mibextid=wwXIfr" icon={<Facebook size={20} />} />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-yaami-gold transition-colors">Home</Link></li>
            <li><Link to="/category/houseboat" className="hover:text-yaami-gold transition-colors">Houseboats</Link></li>
            <li><Link to="/category/shikara" className="hover:text-yaami-gold transition-colors">Shikara Rides</Link></li>
            {/* <li><Link to="/terms" className="hover:text-yaami-gold transition-colors">Terms & Conditions</Link></li> */}
            {/* <li><Link to="/privacy" className="hover:text-yaami-gold transition-colors">Privacy Policy</Link></li> */}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-serif font-semibold text-white mb-4">Contact Us</h3>
          <div className="flex flex-col gap-4 text-sm text-gray-400">
            <div className="flex items-start gap-3">
              <MapPin className="text-yaami-gold shrink-0 mt-1" size={18} />
              <span>Chungam Outpost, Pallathuruthy, Alappuzha, Kerala – 688011</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-yaami-gold shrink-0" size={18} />
              <a href="tel:8547964084" className="hover:text-white">+91 85479 64084</a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-yaami-gold shrink-0" size={18} />
              <a href="mailto:yaamiholidays@gmail.com" className="hover:text-white">yaamiholidays@gmail.com</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-12 pt-6 border-t border-gray-800 text-center">
        <p className="text-yaami-gold font-serif italic mb-2">"Welcome to the Paradise"</p>
        <p className="text-xs text-gray-600">© {new Date().getFullYear()} Yaami Holidays. All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialIcon = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-yaami-gold hover:border-yaami-gold transition-all">
    {icon}
  </a>
);

export default Footer;
