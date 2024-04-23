import React from 'react';
import About from './components/About';
import Calendar from './components/Calender'; 
import AllProfiles from './components/AllProfiles';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';

const Admin = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/calendar" element={<Calendar />} /> 
        <Route path="/profile" element={<AllProfiles />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default Admin;
