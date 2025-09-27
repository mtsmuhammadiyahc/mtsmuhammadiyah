// src/pages/Beranda.js
import React from "react";
import HeroSection from "../components/HeroSection";
import VisiMisi from "../components/VisiMisi";
import Fasilitas from "../components/Fasilitas";
import Galeri from "../components/Galeri";

const Beranda = () => {
  return (
    <div>
      <HeroSection />
      <Fasilitas />
      <Galeri />
    </div>
  );
};

export default Beranda;
