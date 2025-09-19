import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PrestasiSiswa.css";

const PrestasiSiswa = () => {
  const [prestasi, setPrestasi] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null); // simpan index yang dibuka

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/prestasi-siswa")
      .then((res) => setPrestasi(res.data))
      .catch((err) => console.error("Gagal fetch prestasi:", err));
  }, []);

  const toggleExpand = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null); // tutup kalau diklik lagi
    } else {
      setExpandedIndex(index); // buka detail card
    }
  };

  return (
    <div className="prestasi-container">
      <h1>Prestasi</h1>
      <p className="subtitle">Prestasi Siswa & Sekolah</p>

      <div className="prestasi-grid">
        {prestasi.map((p, index) => (
          <div
            key={index}
            className={`prestasi-card ${expandedIndex === index ? "expanded" : ""}`}
            onClick={() => toggleExpand(index)}
          >
            {p.sertifikat && (
              <img
                src={`https://be-production-d9fe.up.railway.app/uploads/prestasi-siswa/${p.sertifikat}`}
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

            {/* Detail muncul kalau expanded */}
            {expandedIndex === index && (
              <div className="prestasi-detail">
                <p><strong>Tingkat:</strong> {p.tingkat}</p>
                <p><strong>Tahun:</strong> {p.tahun}</p>
                {p.siswaId && (
                  <p><strong>Siswa:</strong> {p.siswaId.nama} ({p.siswaId.nis})</p>
                )}
                <p>{p.keterangan}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrestasiSiswa;
