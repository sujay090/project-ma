import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SchedulePage from "./components/ShedulePage";
import DonationPage from "./components/DonationPage";
import GalleryPage from "./components/GalleryPage";
import ContactPage from "./components/ContactPage";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/donate" element={<DonationPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
