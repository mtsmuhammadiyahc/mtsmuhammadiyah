import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'; // 
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Kontak from "./pages/Kontak";
import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import FormInput from "./pages/admin/FormInput";
import Dashboard from "./pages/admin/Dashboard";
import DataGuru from "./Guru/DataGuru"; // 
import DataStaf from "./Guru/DataStaf"; // 
import VisiMisi from "./Profil/VisiMisi";
import Fasilitas from "./Profil/Fasilitas";
import FasilitasDetail from "./Profil/FasilitasDetail";
import Sejarah from "./Profil/Sejarah";
import Sambutan from "./Profil/Sambutan";
import StrukturOrganisasi from "./Profil/StrukturOrganisasi";
import DataSiswa from "./Siswa/DataSiswa";
import Prestasi from "./Siswa/Prestasi";
import DataAlumni from "./Alumni/DataAlumni";
import Testimoni from "./Alumni/Testimoni";
import FormulirPPDB from "./PPDB/FormulirPPDB";
import InfoPPDB from "./PPDB/InfoPPDB";
import JadwalSeleksi from "./PPDB/JadwalSeleksi";
import Foto from "./Galeri/Foto";
import Vidio from "./Galeri/Vidio"
import Berita from "./pages/Berita";


function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Kontak" element={<Kontak />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/formInput" element={<FormInput />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/guru/data-guru" element={<DataGuru />} />
          <Route path="/guru/data-staf" element={<DataStaf />} />
          <Route path="/profil/visi-misi" element={<VisiMisi />} />
          <Route path="/profil/fasilitas" element={<Fasilitas />} />
          <Route path="/profil/fasilitas/:id" element={<FasilitasDetail />} />
          <Route path="/profil/sejarah" element={<Sejarah />} />
          <Route path="/profil/sambutan" element={<Sambutan />} />
          <Route path="/profil/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/siswa/data-siswa" element={<DataSiswa />} />
          <Route path="/siswa/prestasi" element={<Prestasi />} />
          <Route path="/alumni/data-alumni" element={<DataAlumni />} />
          <Route path="/alumni/testimoni" element={<Testimoni />} />
          <Route path="/ppdb/formulir" element={<FormulirPPDB />} />
          <Route path="/ppdb/info" element={<InfoPPDB />} />
          <Route path="/ppdb/jadwal-seleksi" element={<JadwalSeleksi />} />
          <Route path="/galeri/foto" element={<Foto />} />
          <Route path="/galeri/vidio" element={<Vidio />} />
          <Route path="/berita" element={<Berita />} />


        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
