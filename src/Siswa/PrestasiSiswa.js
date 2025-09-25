import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./PrestasiSiswa.css";

const PrestasiSiswa = () => {
  const [prestasi, setPrestasi] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/prestasi-siswa")
      .then((res) => setPrestasi(res.data))
      .catch((err) => console.error("❌ Gagal fetch prestasi:", err));
  }, []);

  // fungsi helper untuk ambil URL gambar
  const getImageUrl = (item) => {
    if (item.sertifikat) {
      return item.sertifikat; // URL cloud (Cloudinary, dsb.)
    }
    if (item.fileLokal) {
      return `https://be-production-d9fe.up.railway.app/uploads/prestasi-siswa/${item.fileLokal}`;
    }
    return "/default-prestasi.jpg"; // fallback default
  };

  return (
    <div className="prestasi-container">
      <h1 className="prestasi-heading">Prestasi</h1>
      <p className="prestasi-subtitle">Prestasi Siswa & Sekolah MTs Muhammadiyah</p>

      <div className="prestasi-grid">
        {prestasi.map((p) => (
          <div
            key={p._id}
            className="prestasi-card"
            onClick={() => navigate(`/siswa/prestasi/${p._id}`)}
          >
            <div className="prestasi-img-wrapper">
              <img
                src={getImageUrl(p)}
                alt={p.namaPrestasi}
                className="prestasi-img"
              />
              <span className={`prestasi-badge ${p.siswaId ? "siswa" : "sekolah"}`}>
                {p.siswaId ? "Siswa" : "Sekolah"}
              </span>
            </div>
            <div className="prestasi-info">
              <h3 className="prestasi-title">{p.namaPrestasi}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrestasiSiswa;
