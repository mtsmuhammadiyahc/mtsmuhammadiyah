import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PrestasiList.css";

const PrestasiList = () => {
  const { id } = useParams();
  const [prestasi, setPrestasi] = useState(null);

  useEffect(() => {
    axios
      .get(`https://be-production-d9fe.up.railway.app/api/admin/prestasi-siswa/${id}`)
      .then((res) => setPrestasi(res.data))
      .catch((err) => console.error("Gagal fetch detail prestasi:", err));
  }, [id]);

  if (!prestasi) {
    return <p className="loading">Loading detail prestasi...</p>;
  }

  return (
    <div className="prestasi-detail-container">
      <div className="detail-card">
        {prestasi.sertifikat && (
          <img
            src={prestasi.sertifikat}
            alt={prestasi.namaPrestasi}
            className="detail-img"
          />
        )}
        <h2>{prestasi.namaPrestasi}</h2>
        <p><strong>Tingkat:</strong> {prestasi.tingkat}</p>
        <p><strong>Tahun:</strong> {prestasi.tahun}</p>
        {prestasi.siswaId && (
          <p>
            <strong>Siswa:</strong> {prestasi.siswaId.nama} ({prestasi.siswaId.nis})
          </p>
        )}
        <p>{prestasi.keterangan}</p>
        <Link to="/prestasi" className="back-btn">⬅ Kembali</Link>
      </div>
    </div>
  );
};

export default PrestasiList;
