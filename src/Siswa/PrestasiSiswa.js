import React, { useEffect, useState } from "react";
import axios from "axios";
import "./PrestasiSiswa.css";

const PrestasiSiswa = () => {
  const [prestasi, setPrestasi] = useState([]);

  useEffect(() => {
    axios
      .get("https://be-production-d9fe.up.railway.app/api/admin/prestasisiswa") // ✅ tanpa tanda "-"
      .then((res) => setPrestasi(res.data))
      .catch((err) => console.error("Gagal fetch prestasi:", err));
  }, []);

  return (
    <div className="prestasi-container">
      <h1>Prestasi Siswa</h1>
      <div className="prestasi-grid">
        {prestasi.map((p, index) => (
          <div key={index} className="prestasi-card">
            {p.sertifikat && (
              <img
                src={`https://be-production-d9fe.up.railway.app/uploads/prestasisiswa/${p.sertifikat}`} // ✅ folder sesuai backend
                alt={p.namaPrestasi}
                className="prestasi-img"
              />
            )}
            <h3>{p.namaPrestasi}</h3>
            <p><strong>Tingkat:</strong> {p.tingkat}</p>
            <p><strong>Tahun:</strong> {p.tahun}</p>
            {p.siswaId ? (
              <p><strong>Siswa:</strong> {p.siswaId.nama} ({p.siswaId.nis})</p>
            ) : (
              <p><strong>Siswa:</strong> -</p>
            )}
            <p>{p.keterangan}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrestasiSiswa;
