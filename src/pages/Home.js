import React from "react";
import { Helmet } from "react-helmet-async";
import "./Home.css"; // import file CSS

function Home() {
  return (
    <div>
      {/* Title di browser */}
      <Helmet>
        <title>Beranda | MTs Muhammadiyah Cilacap</title>
      </Helmet>

      {/* Running Text Modern */}
      <div className="running-text-container">
        <div className="running-text">
          Selamat Datang di MTs Muhammadiyah Cilacap | Info hari ini: Kegiatan
          Ekstrakurikuler & Lomba Antar Sekolah | Tetap Semangat Belajar
        </div>
      </div>

      {/* Konten Utama */}
      <div style={{ padding: "20px" }}>
        <p></p>
      </div>
    </div>
  );
}

export default Home;
