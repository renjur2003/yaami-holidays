import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import { createEnquiry } from '../../services/api';

const BookingModal = ({ isOpen, onClose, selectedBoat, initialMessage }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    guests: '',
    boat: selectedBoat || '',
    message: initialMessage || ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  React.useEffect(() => {
    if (isOpen) {
      setFormData(prev => ({
        ...prev,
        boat: selectedBoat || 'Houseboat',
        message: initialMessage || ''
      }));
    }
  }, [isOpen, selectedBoat, initialMessage]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    try {
      // 1. Submit to Backend (Triggers Email)
      // 1. Submit to Backend (Triggers Email)
      await createEnquiry({
        ...formData,
        boatType: formData.boat, // Map the selected boat string to boatType
        boatId: undefined // Explicitly undefined so backend ignores it
      });

      // 2. WhatsApp Redirect (Client-side)
      const adminPhone = '918547964084'; // Country code added
      const waMessage = `New Booking Request!%0AName: ${formData.name}%0APhone: ${formData.phone}%0ABoat: ${formData.boat}%0ADate: ${formData.date}%0AGuests: ${formData.guests}%0AMessage: ${formData.message}`;
      const waUrl = `https://wa.me/${adminPhone}?text=${waMessage}`;
      
      // We can open WA in new tab
      window.open(waUrl, '_blank');

      setStatus('success');
      setTimeout(() => {
        onClose();
        setStatus('idle');
        setFormData({ name: '', phone: '', email: '', date: '', guests: '', boat: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-yaami-black border border-yaami-gold/30 rounded-2xl w-full max-w-lg overflow-hidden relative shadow-2xl animate-fade-in-up">
        {/* Header */}
        <div className="bg-yaami-gold/10 p-6 flex justify-between items-center border-b border-yaami-gold/20">
          <h2 className="text-2xl font-serif text-yaami-gold font-bold">Book Your Experience</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Name</label>
                   <input 
                      type="text" 
                      name="name" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Phone</label>
                   <input 
                      type="tel" 
                      name="phone" 
                      required 
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                   />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Email</label>
                   <input 
                      type="email" 
                      name="email" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                   />
                </div>
                <div>
                  <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Date</label>
                   <input 
                      type="date" 
                      name="date" 
                      required 
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none color-scheme-dark"
                   />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                   <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Guests</label>
                   <input 
                      type="number" 
                      name="guests" 
                      min="1"
                      required 
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                   />
                </div>
                <div>
                   <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Boat Type</label>
                   <select 
                      name="boat" 
                      value={formData.boat}
                      onChange={handleChange}
                      className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                   >
                       <option value="Houseboat">Houseboat</option>
                       <option value="Shikara">Shikara</option>
                       <option value="Speed Boat">Speed Boat</option>
                       <option value="Kayaking">Kayaking</option>
                   </select>
                </div>
            </div>

            <div>
                 <label className="block text-xs font-bold text-yaami-gold uppercase mb-1">Message</label>
                 <textarea 
                    name="message" 
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-black/50 border border-gray-700 rounded-lg p-3 text-white focus:border-yaami-gold focus:outline-none"
                    placeholder="Any specific requirements?"
                 ></textarea>
            </div>

            <button 
                type="submit" 
                disabled={status === 'loading'}
                className="w-full bg-yaami-gold text-black font-bold font-serif py-4 rounded-lg hover:bg-yellow-500 transition-colors flex items-center justify-center gap-2"
            >
                {status === 'loading' ? 'Sending...' : (
                    <>
                        Confirm Booking Request <Send size={18} />
                    </>
                )}
            </button>

            {status === 'success' && (
                <p className="text-green-500 text-center text-sm font-medium">Request Sent! Opening WhatsApp...</p>
            )}
            {status === 'error' && (
                <p className="text-red-500 text-center text-sm font-medium">Something went wrong. Please try again.</p>
            )}
        </form>
      </div>
    </div>
  );
};

export default BookingModal;
