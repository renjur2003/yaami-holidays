import React from 'react';
import { Eye, Edit, Trash } from 'lucide-react';
import { getEnquiries } from '../../services/api';

const mockBookings = [
  { id: 1, customer: 'Renju', boat: 'Royal 1 Bedroom', date: '2024-01-15', guests: 2, status: 'Confirmed', amount: '₹7,500' },
  { id: 2, customer: 'John Doe', boat: 'Sunset Shikara', date: '2024-01-16', guests: 4, status: 'Pending', amount: '₹3,600' },
  { id: 3, customer: 'Jane Smith', boat: 'Speed Boat', date: '2024-01-20', guests: 4, status: 'Completed', amount: '₹2,500' },
];

const BookingList = () => {
  const [bookings, setBookings] = React.useState([]);

  React.useEffect(() => {
    const fetchBookings = async () => {
      try {
        const data = await getEnquiries();
        setBookings(data);
      } catch (error) {
        console.error('Failed to fetch bookings', error);
      }
    };
    fetchBookings();
  }, []);

  return (
    <div className="bg-yaami-dark border border-gray-800 rounded-xl overflow-hidden">
      <div className="p-6 border-b border-gray-800 flex justify-between items-center">
        <h3 className="text-xl font-serif text-white font-bold">Recent Bookings</h3>
        <button className="text-yaami-gold text-sm hover:underline">View All</button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left">
           <thead className="bg-black/50 text-gray-400 text-xs uppercase tracking-wider">
              <tr>
                 <th className="px-6 py-4">Customer</th>
                 <th className="px-6 py-4">Boat</th>
                 <th className="px-6 py-4">Date</th>
                 <th className="px-6 py-4">Status</th>
                 <th className="px-6 py-4">Guests</th>
                 <th className="px-6 py-4">Actions</th>
              </tr>
           </thead>
           <tbody className="divide-y divide-gray-800 text-sm text-gray-300">
              {bookings.map((b) => (
                 <tr key={b._id} className="hover:bg-gray-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">{b.guestName || b.user?.name}</td>
                    <td className="px-6 py-4">{b.boat?.title}</td>
                    <td className="px-6 py-4">{new Date(b.date).toLocaleDateString()}</td>
                    <td className="px-6 py-4">
                       <span className={`px-2 py-1 rounded-full text-xs font-medium 
                         ${b.status === 'confirmed' ? 'bg-green-500/10 text-green-500' : 
                           b.status === 'pending' ? 'bg-yellow-500/10 text-yellow-500' : 'bg-gray-500/10 text-gray-500'}`}>
                         {b.status}
                       </span>
                    </td>
                    <td className="px-6 py-4 text-white">{b.guests}</td>
                    <td className="px-6 py-4 flex items-center gap-3">
                       <button className="text-gray-400 hover:text-white"><Eye size={16} /></button>
                       <button className="text-gray-400 hover:text-white"><Trash size={16} /></button>
                    </td>
                 </tr>
              ))}
           </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingList;
