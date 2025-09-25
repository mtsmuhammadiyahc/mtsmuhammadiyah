import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./PrestasiList.css";

const PrestasiList = () => {
  const { id } = useParams();
  const [prestasi, setPrestasi] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrestasi = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/admin/prestasi-siswa/${id}`
        );
        setPrestasi(res.data);
      } catch (err) {
        console.error("❌ Gagal fetch detail prestasi:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPrestasi();
  }, [id]);

  if (loading) return <p>Loading detail prestasi...</p>;
  if (!prestasi) return <p>❌ Prestasi tidak ditemukan.</p>;
  
  return (
    <div className="prestasi-detail">
      {/* Banner dengan foto */}
      <div className="prestasi-banner">
        <img
          src={prestasi.sertifikat || "/default-prestasi.jpg"}
          alt={prestasi.namaPrestasi}
          className="prestasi-banner-img"
        />
        <h1 className="prestasi-title">{prestasi.namaPrestasi}</h1>
      </div>

      {/* Meta info */}
      <div className="prestasi-meta">
        <p>
          <strong>Tingkat:</strong> {prestasi.tingkat}
        </p>
        <p>
          <strong>Tahun:</strong> {prestasi.tahun}
        </p>
      </div>

      {/* Deskripsi */}
      <div className="prestasi-desc">
        <h3>Deskripsi</h3>
        <p>{prestasi.keterangan}</p>
      </div>

      {/* Tombol kembali */}
      <div className="prestasi-back">
        <Link to="/siswa/prestasi">← Kembali</Link>
      </div>
    </div>
  );
};

export default PrestasiList;
