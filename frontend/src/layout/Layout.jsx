import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/ui/WhatsAppFloat';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-yaami-black text-white font-sans selection:bg-yaami-gold selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
