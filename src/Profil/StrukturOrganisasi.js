// src/pages/profil/StrukturOrganisasi.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import "./StrukturOrganisasi.css";

const StrukturOrganisasi = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/profil/strukturorganisasi")
      .then((res) => {
        setData(res.data);
        console.log("✅ Data Struktur Organisasi:", res.data);
      })
      .catch((err) => console.error("❌ Gagal ambil data struktur:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="profil-container" data-aos="fade-up">
      <h1 className="profil-title">Struktur Organisasi</h1>

      {data.length > 0 ? (
        <div className="struktur-grid">
          {data.map((item, index) => (
            <div
              key={item._id || index}
              className="struktur-card"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              {item.image && (
                <img
                  src={`https://be-production-d9fe.up.railway.app/uploads/${item.image}`}
                  alt={item.nama}
                  className="struktur-img"
                />
              )}
              <h2 className="struktur-nama">{item.nama}</h2>
              <p className="struktur-jabatan">{item.jabatan}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Belum ada data struktur organisasi.</p>
      )}
    </div>
  );
};

export default StrukturOrganisasi;
