// src/pages/Fasilitas.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Fasilitas.css";


const Fasilitas = () => {
  const [data, setData] = useState([]);

  const API_URL =
    process.env.REACT_APP_API_URL || "https://be-production-d9fe.up.railway.app";

  useEffect(() => {
    axios
      .get(`${API_URL}/api/admin/fasilitas`)
      .then((res) => {
        if (Array.isArray(res.data)) {
          setData(res.data);
        } else {
          setData([]);
        }
        console.log("✅ Data Fasilitas:", res.data);
      })
      .catch((err) => console.error("❌ Gagal ambil data fasilitas:", err));
  }, [API_URL]);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  
  return (
  <div className="profil-container" data-aos="fade-up">
    <h1 className="profil-title">Fasilitas Mts Muhammadiyah</h1>
    

    {data.length > 0 ? (
      <div className="profil-grid">
        {data.map((item, index) => (
          <div
            key={item._id || index}
            className="profil-content"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* 🔹 Link bungkus semua card */}
              <Link to={`/profil/fasilitas/${item._id}`} className="profil-link">
                <div className="profil-label">{item.nama}</div>

            {/* Foto */}
            {item.foto && (
              <img
                src={`${API_URL}/uploads/${item.foto}`}
                alt={item.nama}
                className="profil-image"
                data-aos="zoom-in"
              />
            )}

            {/* Deskripsi */}
            {item.deskripsi && (
              <div className="profil-description">{item.deskripsi}</div>
            )}
          </div>
        ))}
      </div>
    ) : (
      <p>Belum ada data fasilitas.</p>
    )}
  </div>
);
};



export default Fasilitas;
