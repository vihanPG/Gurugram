import React from 'react';
import AboutUs from './components/AboutUs';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Login from './components/Login';
import Rooms from './components/Rooms';
import Services from './components/Services';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';

const PgApp = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/location" element={<Location />} />
                <Route path="/login" element={<Login />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/services" element={<Services />} />
            </Routes>
        </>
    )
}

export default PgApp;
