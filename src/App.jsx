import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Category from './pages/Category';
import BoatDetails from './pages/BoatDetails';
import About from './pages/About';
import Contact from './pages/Contact';
// import Booking from './pages/Booking';
// import Login from './pages/Login';
// import Register from './pages/Register';
import AdminDashboard from './pages/admin/AdminDashboard';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="category/:type" element={<Category />} />
        <Route path="details/:id" element={<BoatDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        {/* <Route path="booking" element={<Booking />} /> */}
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="register" element={<Register />} /> */}
        <Route path="admin" element={<AdminDashboard />} />
        <Route path="*" element={<div className="min-h-[50vh] flex items-center justify-center">Page Not Found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
