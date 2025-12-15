import BookingList from '../../components/admin/BookingList';
import AddBoat from '../../components/admin/AddBoat';
import { LayoutDashboard, Ship, Calendar, Settings, LogOut } from 'lucide-react';
import SEO from '../../components/SEO';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('bookings');

    const renderContent = () => {
        switch(activeTab) {
            case 'bookings': return <BookingList />;
            case 'add-boat': return <AddBoat />;
            case 'boats': return <div className="text-gray-400">Boat Management List Coming Soon</div>;
            default: return <BookingList />;
        }
    };

    return (
        <div className="min-h-screen bg-black flex pt-20">
            {/* Sidebar */}
            <aside className="w-64 bg-yaami-dark border-r border-gray-800 fixed h-full hidden md:block">
                <div className="p-6">
                    <h2 className="text-xl font-serif font-bold text-yaami-gold">Admin Panel</h2>
                </div>
                <nav className="mt-6 flex flex-col gap-2 px-4">
                    <SidebarItem icon={<LayoutDashboard size={20} />} label="Dashboard" active={activeTab === 'dashboard'} onClick={() => setActiveTab('dashboard')} />
                    <SidebarItem icon={<Calendar size={20} />} label="Bookings" active={activeTab === 'bookings'} onClick={() => setActiveTab('bookings')} />
                    <SidebarItem icon={<Ship size={20} />} label="Add Boat" active={activeTab === 'add-boat'} onClick={() => setActiveTab('add-boat')} />
                    <SidebarItem icon={<Settings size={20} />} label="Settings" active={activeTab === 'settings'} onClick={() => setActiveTab('settings')} />
                </nav>
                <div className="absolute bottom-10 px-4 w-full">
                    <button className="flex items-center gap-3 text-red-400 hover:text-red-300 w-full px-4 py-3 rounded-lg hover:bg-white/5 transition-colors">
                        <LogOut size={20} /> Logout
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 md:ml-64 p-8 overflow-y-auto">
                <div className="mb-8">
                    <h1 className="text-3xl font-serif font-bold text-white capitalize">{activeTab.replace('-', ' ')}</h1>
                </div>
                {renderContent()}
            </main>
        </div>
    );
};

const SidebarItem = ({ icon, label, active, onClick }) => (
    <button 
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-lg w-full text-left transition-all
        ${active ? 'bg-yaami-gold text-black font-semibold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}
      `}
    >
        {icon}
        <span>{label}</span>
    </button>
);

export default AdminDashboard;
