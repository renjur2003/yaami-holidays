import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBoatById } from '../data/boats';
import Button from '../components/ui/Button';
import EnquiryModal from '../components/ui/EnquiryModal';
import { Check, Star, Users, MapPin, ArrowLeft } from 'lucide-react';
import SEO from '../components/SEO';

const BoatDetails = () => {
  const { id } = useParams();
  const [boat, setBoat] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [selectedImage, setSelectedImage] = React.useState(null);

  useEffect(() => {
    const fetchBoat = async () => {
      try {
        const data = await getBoatById(id);
        setBoat(data);
        setSelectedImage(data.image);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBoat();
    window.scrollTo(0, 0);
  }, [id]);

  if (!boat) return <div className="pt-32 text-center text-gray-500">Loading...</div>;

  return (
    <div className="pt-24 pb-16 min-h-screen bg-yaami-black">
      <SEO title={boat.title} description={`${boat.title} - ${boat.description}`} />
      
      {/* Enquiry Modal */}
      <EnquiryModal boat={boat} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link to={`/category/${boat.category}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-yaami-gold mb-6 transition-colors">
          <ArrowLeft size={18} /> Back to {boat.category}
        </Link>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
             <div className="rounded-2xl overflow-hidden h-[450px] border border-gray-800 shadow-2xl">
                <img 
                  src={selectedImage || boat.image} 
                  alt={boat.title} 
                  className="w-full h-full object-cover transition-opacity duration-300" 
                />
             </div>
             {/* Thumbnail Grid */}
             {boat.images && boat.images.length > 0 ? (
               <div className="grid grid-cols-5 gap-3">
                 {boat.images.map((img, index) => (
                   <div 
                    key={index} 
                    onClick={() => setSelectedImage(img)}
                    className={`rounded-lg overflow-hidden h-20 border cursor-pointer transition-all duration-200 ${selectedImage === img ? 'border-yaami-gold opacity-100 ring-2 ring-yaami-gold/30' : 'border-gray-800 opacity-60 hover:opacity-100'}`}
                   >
                      <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                   </div>
                 ))}
               </div>
             ) : (
                /* Fallback for other boats without multiple images */
                 <div className="grid grid-cols-4 gap-4">
                   {[1,2,3,4].map((i) => (
                     <div key={i} className="rounded-lg overflow-hidden h-24 border border-gray-800 opacity-60 hover:opacity-100 cursor-pointer">
                        <img src={boat.image} alt="Thumbnail" className="w-full h-full object-cover" />
                     </div>
                   ))}
                 </div>
             )}
          </div>

          {/* Details Section */}
          <div className="flex flex-col">
             <div className="flex items-center gap-2 text-yaami-gold text-sm font-semibold uppercase tracking-wider mb-2">
                <Star size={16} fill="#D4AF37" /> {boat.rating} Rating
             </div>
             <h1 className="text-4xl font-serif font-bold text-white mb-4">{boat.title}</h1>
             <p className="text-gray-400 leading-relaxed mb-6">
               {boat.description} Experience the ultimate luxury of the Alleppey backwaters with our premium service and warm hospitality.
             </p>

             {/* Key Specs */}
             <div className="grid grid-cols-2 gap-4 mb-8">
               <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                  <div className="text-gray-500 text-xs uppercase mb-1">Capacity</div>
                  <div className="text-white font-medium flex items-center gap-2">
                     <Users size={18} className="text-yaami-gold" /> {boat.capacity}
                  </div>
               </div>
               <div className="bg-gray-900/50 p-4 rounded-xl border border-gray-800">
                  <div className="text-gray-500 text-xs uppercase mb-1">Price</div>
                  <div className="text-white font-medium text-lg text-yaami-gold">
                     {boat.price} <span className="text-xs text-gray-500">/ Ride</span>
                  </div>
               </div>
             </div>
             
             {/* Amenities */}
             <div className="mb-10">
               <h3 className="text-lg font-serif font-semibold text-white mb-4">Amenities & Features</h3>
               <ul className="grid grid-cols-2 gap-3">
                 {boat.amenities?.map((item, index) => (
                   <li key={index} className="flex items-center gap-3 text-gray-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-yaami-gold/20 flex items-center justify-center text-yaami-gold shrink-0">
                        <Check size={12} />
                      </div>
                      {item}
                   </li>
                 ))}
               </ul>
             </div>

             {/* Action */}
             <div className="mt-auto pt-6 border-t border-gray-800 flex items-center gap-4">
                <div className="flex-1">
                  <span className="block text-xs text-gray-500">Total Price</span>
                  <span className="block text-2xl font-bold text-white">{boat.price}</span>
                </div>
                <div className="flex-1">
                  <Button onClick={() => setIsModalOpen(true)} variant="primary" className="w-full py-4 text-lg">Send Enquiry</Button>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoatDetails;
