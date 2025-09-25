import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // ✅ tambahin ini
import "./PrestasiSiswa.css";

const PrestasiSiswa = () => {
  const [prestasi, setPrestasi] = useState([]);
  const [selectedPrestasi, setSelectedPrestasi] = useState(null);
  const navigate = useNavigate(); // ✅ hook router

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/prestasi-siswa")
      .then((res) => setPrestasi(res.data))
      .catch((err) => console.error("Gagal fetch prestasi:", err));
  }, []);

  // fungsi helper ambil URL foto
  const getImageUrl = (item) => {
    if (item.sertifikat) {
      return item.sertifikat; // ✅ Cloudinary URL langsung
    }
    if (item.fileLokal) {
      return `https://be-production-d9fe.up.railway.app/uploads/prestasi-siswa/${item.fileLokal}`;
    }
    return null;
  };

  return (
    <div className="prestasi-container">
      <h1>Prestasi</h1>
      <p className="subtitle">Prestasi Siswa & Sekolah</p>

      <div className="prestasi-grid">
        {prestasi.map((p, index) => (
          <div
            key={index}
            className="prestasi-card"
            // ✅ ubah: klik → redirect ke halaman detail
            onClick={() => navigate(`/siswa/prestasi/${p._id}`)}
          >
            {getImageUrl(p) && (
              <img
                src={getImageUrl(p)}
                alt={p.namaPrestasi}
                className="prestasi-img"
              />
            )}
            <div className="prestasi-info">
              <span className={`badge ${p.siswaId ? "siswa" : "sekolah"}`}>
                {p.siswaId ? "Siswa" : "Sekolah"}
              </span>
              <h3>{p.namaPrestasi}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* ❌ Modal dihapus? */}
      {/* Kalau mau pake redirect ke halaman detail, 
          bagian modal ini sebaiknya dihapus aja biar nggak dobel */}
    </div>
  );
};

export default PrestasiSiswa;
