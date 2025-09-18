// src/pages/Fasilitas.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";


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
      <h1 className="profil-title">Fasilitas</h1>

      {data.length > 0 ? (
        data.map((item, index) => (
          <div
            key={item._id || index}
            className="profil-content"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Nama Fasilitas */}
            <h2 className="profil-subtitle">{item.nama}</h2>

            {/* Deskripsi */}
            <p>{item.deskripsi}</p>

            {/* Foto */}
            {item.foto && (
              <img
                src={`${API_URL}/uploads/${item.foto}`}
                alt={item.nama}
                className="profil-image"
                style={{
                  maxWidth: "100%",
                  height: "auto",
                  marginTop: "15px",
                  borderRadius: "8px",
                }}
                data-aos="zoom-in"
              />
            )}
          </div>
        ))
      ) : (
        <p>Belum ada data fasilitas.</p>
      )}
    </div>
  );
};

export default Fasilitas;
