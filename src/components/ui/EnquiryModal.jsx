import React, { useState } from 'react';
import { X, Send, Phone } from 'lucide-react';
import Button from './Button';
import { createEnquiry } from '../../services/api';

const EnquiryModal = ({ boat, isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        guests: 2,
        message: ''
    });
    const [status, setStatus] = useState('idle'); // idle, loading, success, error

    if (!isOpen) return null;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await createEnquiry({
                ...formData,
                boatId: boat._id,
                boatName: boat.title // Optional for email template logic if needed
            });
            setStatus('success');
            setTimeout(() => {
                onClose();
                setStatus('idle');
                setFormData({ name: '', email: '', phone: '', date: '', guests: 2, message: '' });
            }, 3000);
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Construct WhatsApp Link
    const whatsAppMessage = `Hi, I am interested in ${boat.title}. Price: ${boat.price}.`;
    const whatsAppLink = `https://wa.me/918547964084?text=${encodeURIComponent(whatsAppMessage)}`;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
            <div className="bg-yaami-dark border border-gray-800 rounded-2xl w-full max-w-lg relative overflow-hidden shadow-2xl animate-fadeIn">
                
                {/* Header */}
                <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-black/40">
                    <div>
                        <h3 className="text-xl font-serif text-white font-bold">Enquire Now</h3>
                        <p className="text-xs text-yaami-gold mt-1">Ref: {boat.title}</p>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                    {status === 'success' ? (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-white mb-2">Enquiry Sent!</h4>
                            <p className="text-gray-400">We will contact you shortly via Phone/WhatsApp.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase">Name</label>
                                    <input required name="name" value={formData.name} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase">Phone (WhatsApp)</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase">Email</label>
                                <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase">Date</label>
                                    <input required type="date" name="date" value={formData.date} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none" />
                                </div>
                                <div className="space-y-1">
                                    <label className="text-xs text-gray-400 uppercase">Guests</label>
                                    <input required type="number" name="guests" value={formData.guests} onChange={handleChange} className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none" />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs text-gray-400 uppercase">Message</label>
                                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-yaami-gold outline-none"></textarea>
                            </div>

                            <div className="pt-4 flex flex-col gap-3">
                                <Button type="submit" disabled={status === 'loading'} variant="primary" className="w-full py-3">
                                    {status === 'loading' ? 'Sending...' : 'Send Enquiry'}
                                </Button>
                                
                                <div className="relative flex items-center py-2">
                                    <div className="flex-grow border-t border-gray-800"></div>
                                    <span className="flex-shrink-0 mx-4 text-gray-500 text-xs">OR CHAT INSTANTLY</span>
                                    <div className="flex-grow border-t border-gray-800"></div>
                                </div>

                                <a href={whatsAppLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 w-full py-3 bg-green-600/20 hover:bg-green-600/30 text-green-500 rounded-lg border border-green-600/50 transition-all font-bold text-sm uppercase tracking-wide">
                                    <Phone size={18} /> Chat on WhatsApp
                                </a>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EnquiryModal;
