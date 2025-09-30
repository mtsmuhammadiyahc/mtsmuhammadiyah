// src/pages/Beranda.js
import React from "react";
import HeroSection from "../components/HeroSection";
import Fasilitas from "../Profil/Fasilitas";
import VisiMisi from "../Profil/VisiMisi";
import Sambutan from "../Profil/Sambutan";

function Beranda() {
  return (
    <div>
      <section id="beranda"><HeroSection /></section>
      <section id="sejarah"><h2>Sejarah</h2><p>Isi konten sejarah...</p></section>
      <section id="visi-misi"><VisiMisi preview={true} /></section>
      <section id="struktur-organisasi"><h2>Struktur Organisasi</h2></section>
      <section id="fasilitas"><Fasilitas preview={true} /></section>
      <section id="sambutan"><Sambutan /></section>
      <section id="galeri-foto"><h2>Galeri Foto</h2></section>
      <section id="galeri-video"><h2>Galeri Video</h2></section>
      <section id="guru"><h2>Data Guru</h2></section>
      <section id="staf"><h2>Data Staf</h2></section>
      <section id="siswa"><h2>Data Siswa</h2></section>
      <section id="prestasi"><h2>Prestasi</h2></section>
      <section id="formulir-ppdb"><h2>Formulir PPDB</h2></section>
      <section id="info-ppdb"><h2>Info PPDB</h2></section>
      <section id="jadwal-seleksi"><h2>Jadwal Seleksi</h2></section>
      <section id="berita"><h2>Berita</h2></section>
      <section id="kontak"><h2>Kontak</h2></section>
    </div>
  );
}

export default Beranda;
