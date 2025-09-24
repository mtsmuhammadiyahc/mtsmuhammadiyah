import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PrestasiSiswa.css";

const PrestasiSiswa = () => {
  const [prestasi, setPrestasi] = useState([]);
  const [selectedPrestasi, setSelectedPrestasi] = useState(null);

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
            onClick={() => setSelectedPrestasi(p)}
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

      {/* Modal Detail */}
      {selectedPrestasi && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedPrestasi(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {getImageUrl(selectedPrestasi) && (
              <img
                src={getImageUrl(selectedPrestasi)}
                alt={selectedPrestasi.namaPrestasi}
                className="modal-img"
              />
            )}
            <h2>{selectedPrestasi.namaPrestasi}</h2>
            <p>
              <strong>Tingkat:</strong> {selectedPrestasi.tingkat}
            </p>
            <p>
              <strong>Tahun:</strong> {selectedPrestasi.tahun}
            </p>
            {selectedPrestasi.siswaId && (
              <p>
                <strong>Siswa:</strong> {selectedPrestasi.siswaId.nama} (
                {selectedPrestasi.siswaId.nis})
              </p>
            )}
            <p>{selectedPrestasi.keterangan}</p>
            <button
              className="close-btn"
              onClick={() => setSelectedPrestasi(null)}
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PrestasiSiswa;
