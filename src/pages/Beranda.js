// src/pages/Beranda.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Fasilitas from "../Profil/Fasilitas";
import Galeri from "../Galeri/Galeri";

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
