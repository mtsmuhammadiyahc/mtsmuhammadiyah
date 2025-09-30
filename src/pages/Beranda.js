// src/pages/Beranda.js
import React, { useEffect } from "react";
import axios from "axios";
import HeroSection from "../components/HeroSection";
import Fasilitas from "../Profil/Fasilitas";
import VisiMisi from "../Profil/VisiMisi";
import Sambutan from "../Profil/Sambutan";

function Beranda() {
  useEffect(() => {
    console.log("Beranda mounted");
  }, []);

  return (
    <div>
      <section id="beranda"><HeroSection /></section>

      <section id="visi-misi">
        <h2>Debug: memanggil VisiMisi</h2>
        <VisiMisi preview={true} />
      </section>

      <section id="fasilitas">
        <h2>Debug: memanggil Fasilitas</h2>
        <Fasilitas preview={true} />
      </section>

      <section id="sambutan">
        <h2>Debug: memanggil Sambutan</h2>
        <Sambutan preview={true} />
      </section>

      {/* sisanya... */}
    </div>
  );
}

export default Beranda;
